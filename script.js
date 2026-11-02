/**
 * ============================================================================
 * CHIEN — PERSONAL PORTFOLIO CONTROLLER (SCRIPT.JS)
 * Author: 裴維戰 (BUI DUY CHIEN)
 * Features:
 * - ScrollSpy & Sticky Header
 * - Mobile Drawer Navigation
 * - Online Resume Modal Controller
 * - Dynamic Project Detail Modal
 * - Copy Email to Clipboard with Toast Notification
 * - Back to Top Smooth Scroll
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. 安全 HTML 轉義函式
  function escapeHtml(str) {
    if (typeof str !== 'string') return String(str || '');
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 2. DOM 元素快取
  const DOM = {
    siteHeader: document.getElementById('siteHeader'),
    navLinks: document.querySelectorAll('.nav-link'),
    mobileToggleBtn: document.getElementById('mobileToggleBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    drawerCloseBtn: document.getElementById('drawerCloseBtn'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    drawerLinks: document.querySelectorAll('.drawer-link'),

    headerResumeBtn: document.getElementById('headerResumeBtn'),
    openResumeModalBtn: document.getElementById('openResumeModalBtn'),
    resumeModal: document.getElementById('resumeModal'),
    resumeModalCloseBtn: document.getElementById('resumeModalCloseBtn'),
    resumeModalDismissBtn: document.getElementById('resumeModalDismissBtn'),

    projectModal: document.getElementById('projectModal'),
    projModalTitle: document.getElementById('projModalTitle'),
    projModalCategory: document.getElementById('projModalCategory'),
    projModalBody: document.getElementById('projModalBody'),
    projModalCloseBtn: document.getElementById('projModalCloseBtn'),
    projModalDismissBtn: document.getElementById('projModalDismissBtn'),
    projModalLinkBtn: document.getElementById('projModalLinkBtn'),

    copyEmailBtn: document.getElementById('copyEmailBtn'),
    displayEmail: document.getElementById('displayEmail'),
    toastNotification: document.getElementById('toastNotification'),
    backToTop: document.getElementById('backToTop'),
    copyrightYear: document.getElementById('copyrightYear')
  };

  // 3. 取得資料來源 (來自 data/profile.js)
  const profileData = (typeof PERSONAL_DATA !== 'undefined' ? PERSONAL_DATA : (window.PERSONAL_DATA || {}));

  // 4. 初始化版權年份
  function initCopyrightYear() {
    if (DOM.copyrightYear) {
      DOM.copyrightYear.textContent = new Date().getFullYear();
    }
  }

  // 5. 導覽列捲動效果與 ScrollSpy
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Header 陰影
      if (DOM.siteHeader) {
        if (scrollY > 20) {
          DOM.siteHeader.classList.add('scrolled');
        } else {
          DOM.siteHeader.classList.remove('scrolled');
        }
      }

      // 置頂按鈕顯示/隱藏
      if (DOM.backToTop) {
        if (scrollY > 400) {
          DOM.backToTop.classList.add('visible');
        } else {
          DOM.backToTop.classList.remove('visible');
        }
      }

      // ScrollSpy 高亮當前 Section
      let currentSectionId = '';
      sections.forEach(section => {
        const top = section.offsetTop - 140;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        DOM.navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (DOM.backToTop) {
      DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // 6. 行動裝置抽屜選單控制
  function initMobileDrawer() {
    function openDrawer() {
      if (DOM.mobileDrawer) DOM.mobileDrawer.classList.add('open');
      if (DOM.drawerOverlay) DOM.drawerOverlay.classList.add('open');
      if (DOM.mobileToggleBtn) DOM.mobileToggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (DOM.mobileDrawer) DOM.mobileDrawer.classList.remove('open');
      if (DOM.drawerOverlay) DOM.drawerOverlay.classList.remove('open');
      if (DOM.mobileToggleBtn) DOM.mobileToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (DOM.mobileToggleBtn) DOM.mobileToggleBtn.addEventListener('click', openDrawer);
    if (DOM.drawerCloseBtn) DOM.drawerCloseBtn.addEventListener('click', closeDrawer);
    if (DOM.drawerOverlay) DOM.drawerOverlay.addEventListener('click', closeDrawer);

    DOM.drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // 7. 線上履歷預覽 Modal
  function initResumeModal() {
    function openResume() {
      if (!DOM.resumeModal) return;
      DOM.resumeModal.classList.add('open');
      DOM.resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeResume() {
      if (!DOM.resumeModal) return;
      DOM.resumeModal.classList.remove('open');
      DOM.resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (DOM.headerResumeBtn) DOM.headerResumeBtn.addEventListener('click', openResume);
    if (DOM.openResumeModalBtn) DOM.openResumeModalBtn.addEventListener('click', openResume);
    if (DOM.resumeModalCloseBtn) DOM.resumeModalCloseBtn.addEventListener('click', closeResume);
    if (DOM.resumeModalDismissBtn) DOM.resumeModalDismissBtn.addEventListener('click', closeResume);

    if (DOM.resumeModal) {
      DOM.resumeModal.addEventListener('click', e => {
        if (e.target === DOM.resumeModal) closeResume();
      });
    }
  }

  // 8. 專案詳情 Modal
  function initProjectModal() {
    const projects = (profileData && Array.isArray(profileData.projects)) ? profileData.projects : [];

    function openProject(projId) {
      const proj = projects.find(p => p.id === projId);
      if (!proj || !DOM.projectModal) return;

      if (DOM.projModalTitle) DOM.projModalTitle.textContent = proj.title;
      if (DOM.projModalCategory) DOM.projModalCategory.textContent = `${proj.category} • ${proj.status}`;

      let contentHtml = '';

      // Preview Image
      if (proj.imageUrl) {
        contentHtml += `
          <div style="border-radius:8px; overflow:hidden; background:#0B0F19; margin-bottom:20px; border:1px solid var(--border-main);">
            <img src="${escapeHtml(proj.imageUrl)}" alt="${escapeHtml(proj.title)}" style="width:100%; height:auto; max-height:300px; object-fit:contain;">
          </div>
        `;
      }

      // Description
      contentHtml += `
        <div class="modal-detail-block">
          <h4 class="mdb-title">📌 專案說明與學習背景</h4>
          <p class="mdb-text">${escapeHtml(proj.description)}</p>
        </div>
      `;

      // Tech Stack
      if (Array.isArray(proj.technologies) && proj.technologies.length > 0) {
        contentHtml += `
          <div class="modal-detail-block">
            <h4 class="mdb-title">🛠️ 使用技術與工具</h4>
            <div class="pc-tech-tags">
              ${proj.technologies.map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
            </div>
          </div>
        `;
      }

      // Key Features / Steps
      if (Array.isArray(proj.features) && proj.features.length > 0) {
        contentHtml += `
          <div class="modal-detail-block">
            <h4 class="mdb-title">🎯 核心技術特點與實作重點</h4>
            <ul class="mdb-features-list">
              ${proj.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      if (DOM.projModalBody) DOM.projModalBody.innerHTML = contentHtml;

      // Link Button
      if (DOM.projModalLinkBtn) {
        DOM.projModalLinkBtn.href = proj.demoUrl || proj.githubUrl || '#';
        if (proj.id === 'proj-portfolio') {
          DOM.projModalLinkBtn.textContent = '開啟作業成果展示平台 ↗';
        } else {
          DOM.projModalLinkBtn.textContent = '檢視 GitHub 原始碼 ↗';
        }
      }

      DOM.projectModal.classList.add('open');
      DOM.projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeProject() {
      if (!DOM.projectModal) return;
      DOM.projectModal.classList.remove('open');
      DOM.projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // 綁定所有專案按鈕
    document.querySelectorAll('.btn-open-project').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-proj');
        openProject(projId);
      });
    });

    if (DOM.projModalCloseBtn) DOM.projModalCloseBtn.addEventListener('click', closeProject);
    if (DOM.projModalDismissBtn) DOM.projModalDismissBtn.addEventListener('click', closeProject);

    if (DOM.projectModal) {
      DOM.projectModal.addEventListener('click', e => {
        if (e.target === DOM.projectModal) closeProject();
      });
    }

    // 全域 ESC 關閉 Modal
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (DOM.resumeModal && DOM.resumeModal.classList.contains('open')) {
          closeResume();
        }
        if (DOM.projectModal && DOM.projectModal.classList.contains('open')) {
          closeProject();
        }
      }
    });
  }

  // 9. 一鍵複製 Email 與 Toast 提示
  function initCopyEmail() {
    if (!DOM.copyEmailBtn) return;

    DOM.copyEmailBtn.addEventListener('click', () => {
      const email = DOM.displayEmail ? DOM.displayEmail.textContent.trim() : 'duychien17122004@gmail.com';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast();
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });

    function fallbackCopy(text) {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (err) {
        alert('請手動複製信箱：' + text);
      }
      document.body.removeChild(input);
    }

    function showToast() {
      if (!DOM.toastNotification) return;
      DOM.toastNotification.classList.add('show');
      setTimeout(() => {
        DOM.toastNotification.classList.remove('show');
      }, 3000);
    }
  }

  // 10. 全局初始化入口
  function init() {
    initCopyrightYear();
    initScrollSpy();
    initMobileDrawer();
    initResumeModal();
    initProjectModal();
    initCopyEmail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

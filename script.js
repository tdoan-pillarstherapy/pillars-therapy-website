// ===== Header scroll effect =====
const header = document.getElementById('header');

function handleScroll() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
});

// Close menu on link click
nav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('open');
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = nav.querySelector(`a[href="#${id}"]`);

    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// ===== Fade-in on scroll =====
function initFadeIn() {
  const elements = document.querySelectorAll(
    '.pathway-card, .discipline-card, .service-item, .value-item, .about-content, .contact-info, .contact-form-wrapper'
  );

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initFadeIn);

// ===== Contact form (basic handler) =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  // For now, show a confirmation message
  const wrapper = contactForm.closest('.contact-form-wrapper');
  wrapper.innerHTML = `
    <div style="text-align: center; padding: 3rem 1rem;">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="margin-bottom: 1rem; color: #1a5c4c;">
        <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2"/>
        <path d="M16 24l6 6 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h3 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Thank you!</h3>
      <p style="color: #5a5a72; line-height: 1.6;">Your enquiry has been received. We'll be in touch within 1&ndash;2 business days.</p>
    </div>
  `;
});

// ===== Full-page paper plane trail =====
function initPlaneTrail() {
  var svg = document.getElementById('planeTrail');
  if (!svg) return;

  var trailPath = svg.querySelector('.plane-trail');
  var planeIcon = svg.querySelector('.plane-icon');
  var totalPathLength = 0;
  var trailStartY = 0;
  var trailEndY = 0;

  function buildTrail() {
    if (window.innerWidth <= 1024) {
      svg.style.display = 'none';
      return;
    }
    svg.style.display = '';

    var pageWidth = document.documentElement.clientWidth;
    var contactSection = document.getElementById('contact');
    if (!contactSection) return;

    // Extend SVG to cover contact section too
    var contactBot = contactSection.offsetTop + contactSection.offsetHeight;
    var totalHeight = contactBot;

    svg.setAttribute('viewBox', '0 0 ' + pageWidth + ' ' + totalHeight);
    svg.style.height = totalHeight + 'px';

    var container = document.querySelector('.hero .container');
    if (!container) return;
    var containerRect = container.getBoundingClientRect();
    var contentLeft = containerRect.left;
    var contentRight = containerRect.right;

    var leftGutter = Math.max(contentLeft * 0.5, 20);
    var rightGutter = contentRight + (pageWidth - contentRight) * 0.5;

    function absTop(el) { return el.getBoundingClientRect().top + window.scrollY; }
    function absBottom(el) { return el.getBoundingClientRect().bottom + window.scrollY; }

    var hero = document.querySelector('.hero');
    var pathways = document.getElementById('services');
    var disciplines = document.querySelector('.disciplines');
    var ndis = document.getElementById('ndis');
    var sah = document.getElementById('sah');
    var about = document.getElementById('about');

    var heroTop = absTop(hero);
    var heroBot = absBottom(hero);

    // Pathways card gaps
    var pathwayCards = pathways ? pathways.querySelectorAll('.pathway-card') : [];
    var pCardsY = 0, pCardsMidY = 0, pCardsBot = 0;
    var gap12x = pageWidth * 0.38, gap23x = pageWidth * 0.62;
    if (pathwayCards.length >= 3) {
      var c1 = pathwayCards[0].getBoundingClientRect();
      var c2 = pathwayCards[1].getBoundingClientRect();
      var c3 = pathwayCards[2].getBoundingClientRect();
      gap12x = (c1.right + c2.left) / 2;
      gap23x = (c2.right + c3.left) / 2;
      pCardsY = c1.top + window.scrollY;
      pCardsMidY = pCardsY + c1.height * 0.5;
      pCardsBot = pCardsY + c1.height;
    }
    var pathwaysTop = pathways ? absTop(pathways) : heroBot + 100;
    var pathwaysBot = pathways ? absBottom(pathways) : heroBot + 500;

    // Disciplines card gap
    var discCards = disciplines ? disciplines.querySelectorAll('.discipline-card') : [];
    var discGapX = pageWidth * 0.5, discCardsY = 0, discCardsMidY = 0, discCardsBot = 0;
    if (discCards.length >= 2) {
      var d1 = discCards[0].getBoundingClientRect();
      var d2 = discCards[1].getBoundingClientRect();
      discGapX = (d1.right + d2.left) / 2;
      discCardsY = d1.top + window.scrollY;
      discCardsMidY = discCardsY + d1.height * 0.5;
      discCardsBot = discCardsY + d1.height;
    }
    var discTop = disciplines ? absTop(disciplines) : pathwaysBot + 100;
    var discBot = disciplines ? absBottom(disciplines) : pathwaysBot + 500;

    // NDIS column gap
    var ndisColumns = ndis ? ndis.querySelectorAll('.services-column') : [];
    var ndisGapX = pageWidth * 0.55;
    var ndisTop = ndis ? absTop(ndis) : discBot + 100;
    var ndisBot = ndis ? absBottom(ndis) : discBot + 800;
    if (ndisColumns.length >= 2) {
      var nc1 = ndisColumns[0].getBoundingClientRect();
      var nc2 = ndisColumns[1].getBoundingClientRect();
      ndisGapX = (nc1.right + nc2.left) / 2;
    }

    // SAH column gap
    var sahColumns = sah ? sah.querySelectorAll('.services-column') : [];
    var sahGapX = pageWidth * 0.55;
    var sahTop = sah ? absTop(sah) : ndisBot + 100;
    var sahBot = sah ? absBottom(sah) : ndisBot + 800;
    if (sahColumns.length >= 2) {
      var sc1 = sahColumns[0].getBoundingClientRect();
      var sc2 = sahColumns[1].getBoundingClientRect();
      sahGapX = (sc1.right + sc2.left) / 2;
    }

    var aboutTop = about ? absTop(about) : sahBot + 100;
    var aboutBot = about ? absBottom(about) : sahBot + 400;
    var contactTop = absTop(contactSection);

    // Target the mailbox element for trail endpoint
    var mailbox = document.getElementById('mailbox');
    var mailboxEndX = pageWidth * 0.5;
    var mailboxEndY = contactTop + contactSection.offsetHeight * 0.45;
    if (mailbox) {
      var mbRect = mailbox.getBoundingClientRect();
      mailboxEndX = mbRect.left + mbRect.width * 0.5 + window.scrollX;
      mailboxEndY = mbRect.top + mbRect.height * 0.25 + window.scrollY;
    }

    // Start clearly inside the viewport
    var startX = Math.min(rightGutter - 30, pageWidth - 60);
    var startY = heroTop + 60;

    trailStartY = startY;
    trailEndY = mailboxEndY;

    var path = [
      // Start: top-right, clearly visible in hero
      'M' + startX + ',' + startY,

      // Hero: sweep left through gap between text and image
      'C ' + (rightGutter) + ',' + (heroTop + 140) +
      ' ' + (contentRight - 60) + ',' + (heroTop + 240) +
      ' ' + (contentLeft + 60) + ',' + (heroBot - 40),

      // Into pathways: left gutter → card gap
      'C ' + leftGutter + ',' + (pathwaysTop + 30) +
      ' ' + leftGutter + ',' + (pCardsY - 40) +
      ' ' + gap12x + ',' + pCardsMidY,

      // Card gap 1→2, sweep to gap 2→3
      'C ' + (gap12x + 40) + ',' + (pCardsBot - 30) +
      ' ' + (gap23x - 40) + ',' + (pCardsBot - 60) +
      ' ' + gap23x + ',' + pCardsBot,

      // Exit pathways → right gutter
      'C ' + (gap23x + 60) + ',' + (pCardsBot + 60) +
      ' ' + rightGutter + ',' + (pathwaysBot - 20) +
      ' ' + rightGutter + ',' + (discTop + 40),

      // Disciplines: right → card gap
      'C ' + rightGutter + ',' + (discCardsY - 30) +
      ' ' + (discGapX + 80) + ',' + (discCardsY - 10) +
      ' ' + discGapX + ',' + discCardsMidY,

      // Exit disciplines → left gutter
      'C ' + (discGapX - 80) + ',' + (discCardsBot + 20) +
      ' ' + leftGutter + ',' + (discBot - 40) +
      ' ' + leftGutter + ',' + (ndisTop + 60),

      // NDIS: left → column gap
      'C ' + leftGutter + ',' + (ndisTop + 200) +
      ' ' + (ndisGapX - 60) + ',' + (ndisTop + 300) +
      ' ' + ndisGapX + ',' + (ndisTop + (ndisBot - ndisTop) * 0.45),

      // Exit NDIS → right gutter
      'C ' + (ndisGapX + 60) + ',' + (ndisBot - 200) +
      ' ' + rightGutter + ',' + (ndisBot - 80) +
      ' ' + rightGutter + ',' + (sahTop + 60),

      // SAH: right → column gap
      'C ' + rightGutter + ',' + (sahTop + 200) +
      ' ' + (sahGapX + 60) + ',' + (sahTop + 300) +
      ' ' + sahGapX + ',' + (sahTop + (sahBot - sahTop) * 0.45),

      // Exit SAH → left gutter
      'C ' + (sahGapX - 60) + ',' + (sahBot - 200) +
      ' ' + leftGutter + ',' + (sahBot - 80) +
      ' ' + leftGutter + ',' + (aboutTop + 60),

      // About: left → center
      'C ' + leftGutter + ',' + (aboutTop + 150) +
      ' ' + (contentLeft + 100) + ',' + (aboutBot - 80) +
      ' ' + (pageWidth * 0.5) + ',' + (aboutBot + 20),

      // Final: curve into the mailbox
      'C ' + (pageWidth * 0.55) + ',' + (contactTop - 60) +
      ' ' + (mailboxEndX + 60) + ',' + (mailboxEndY - 80) +
      ' ' + mailboxEndX + ',' + mailboxEndY
    ];

    trailPath.setAttribute('d', path.join(' '));

    // Get total path length for scroll animation
    totalPathLength = trailPath.getTotalLength();

    // Set up the dashed trail — initially fully hidden
    trailPath.style.strokeDasharray = totalPathLength;
    trailPath.style.strokeDashoffset = totalPathLength;

    // Initial scroll update
    updateScroll();

    svg.classList.add('visible');
  }

  // Scroll-driven animation: plane moves along path, trail draws progressively
  function updateScroll() {
    if (!totalPathLength || window.innerWidth <= 1024) return;

    var scrollY = window.scrollY;
    var maxScroll = trailEndY - window.innerHeight * 0.5;
    var minScroll = 0;

    // Progress: 0 at top → 1 at contact section
    var progress = Math.max(0, Math.min(1, (scrollY - minScroll) / (maxScroll - minScroll)));

    // Always show at least a small initial segment so plane + trail visible at top
    var minDraw = 60;
    var drawLength = minDraw + (totalPathLength - minDraw) * progress;

    trailPath.style.strokeDashoffset = totalPathLength - drawLength;

    // Move plane along the path
    var point = trailPath.getPointAtLength(drawLength);
    // Get a point slightly ahead for rotation angle
    var ahead = trailPath.getPointAtLength(Math.min(drawLength + 20, totalPathLength));
    var angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI);

    // Plane: 32x20 base at 2.6× scale. Center of mass ~ (42, 29)
    var cx = 42, cy = 29;
    planeIcon.setAttribute('transform',
      'translate(' + (point.x - cx) + ',' + (point.y - cy) + ') rotate(' + angle + ' ' + cx + ' ' + cy + ')');

    // Fade out the plane as it approaches the mailbox (last 5% of trail)
    var fadeStart = 0.92;
    if (progress >= 1) {
      planeIcon.style.opacity = '0';
    } else if (progress > fadeStart) {
      planeIcon.style.opacity = String(1 - ((progress - fadeStart) / (1 - fadeStart)));
    } else {
      planeIcon.style.opacity = '1';
    }
  }

  // Scroll listener with requestAnimationFrame for smooth performance
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Build after page fully loads
  function tryBuild() {
    if (document.getElementById('contact')) {
      buildTrail();
    }
  }

  if (document.readyState === 'complete') {
    setTimeout(tryBuild, 200);
  }
  window.addEventListener('load', function() {
    setTimeout(tryBuild, 200);
  });
  setTimeout(tryBuild, 1000);

  // Debounced resize
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildTrail, 250);
  });
}

initPlaneTrail();

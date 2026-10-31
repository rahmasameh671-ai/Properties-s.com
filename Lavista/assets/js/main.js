/**
 * LA VISTA DEVELOPMENTS — EXCLUSIVE NEW CAIRO & CAPITAL PORTFOLIO
 * Main Interactive Script & Multi-Recipient Lead Routing + Zapier Webhook
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountrySelector();
  initLeadForm();
});

// Country Code Data
const countryCodes = [
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
];

function initCountrySelector() {
  const btn = document.getElementById('countrySelectBtn');
  const menu = document.getElementById('countryDropdownMenu');
  const searchInput = document.getElementById('countrySearchInput');
  const listContainer = document.getElementById('countryListContainer');
  const hiddenCodeInput = document.getElementById('selectedCountryCode');
  const flagDisplay = document.getElementById('selectedCountryFlag');
  const codeDisplay = document.getElementById('selectedCountryCodeText');

  if (!btn || !menu || !listContainer) return;

  function renderList(filter = '') {
    listContainer.innerHTML = '';
    const filtered = countryCodes.filter(c => 
      c.name.toLowerCase().includes(filter.toLowerCase()) || 
      c.code.includes(filter)
    );

    if (filtered.length === 0) {
      listContainer.innerHTML = `<div style="padding: 12px; font-size: 0.8rem; color: #94A3B8; text-align: center;">No country found</div>`;
      return;
    }

    filtered.forEach(item => {
      const option = document.createElement('div');
      option.className = `country-option ${item.code === hiddenCodeInput.value ? 'selected' : ''}`;
      option.innerHTML = `
        <div style="display:flex; align-items:center; gap: 8px;">
          <span>${item.flag}</span>
          <span>${item.name}</span>
        </div>
        <span style="color: #64748B; font-weight: 600;">${item.code}</span>
      `;
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        hiddenCodeInput.value = item.code;
        flagDisplay.textContent = item.flag;
        codeDisplay.textContent = item.code;
        menu.classList.remove('active');
      });
      listContainer.appendChild(option);
    });
  }

  renderList();

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    if (menu.classList.contains('active') && searchInput) {
      searchInput.value = '';
      renderList();
      setTimeout(() => searchInput.focus(), 50);
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderList(e.target.value);
    });
    searchInput.addEventListener('click', (e) => e.stopPropagation());
  }

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
}

function initLeadForm() {
  const form = document.getElementById('interestLeadForm');
  const submitBtn = document.getElementById('formSubmitBtn');
  const modalBackdrop = document.getElementById('leadSuccessModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  const inlineSuccess = document.getElementById('formSuccessInline');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phoneNumber');
    const countryCodeInput = document.getElementById('selectedCountryCode');

    const fullName = fullNameInput ? fullNameInput.value.trim() : '';
    const rawPhone = phoneInput ? phoneInput.value.trim() : '';
    const countryCode = countryCodeInput ? countryCodeInput.value.trim() : '+20';

    if (!fullName || fullName.length < 2) {
      alert('Please enter your full name.');
      fullNameInput?.focus();
      return;
    }

    if (!rawPhone || rawPhone.replace(/\D/g, '').length < 6) {
      alert('Please enter a valid phone number.');
      phoneInput?.focus();
      return;
    }

    const fullPhoneNumber = `${countryCode} ${rawPhone}`;

    // Update button loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" style="width:18px;height:18px;margin-right:8px;display:inline-block;animation:spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle style="opacity:0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path style="opacity:0.75;" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      PROCESSING...
    `;

    // Zapier Webhook Payload Data Structure
    const zapierData = {
      fullName: fullName,
      phoneNumber: fullPhoneNumber,
      landingPageUrl: window.location.href,       // Captures the full page URL
      submissionDate: new Date().toISOString(),   // Captures the exact date and time
      project: 'La Vista Developments',
      agency: 'properties-s.com',
      campaignCategory: 'Google Ads Real Estate',
      complianceStatus: 'Verified Strategic Partner'
    };

    // Full Lead Payload for Logging and Email Routing
    const leadData = {
      timestamp: zapierData.submissionDate,
      formattedTime: new Date().toLocaleString(),
      fullName: fullName,
      phoneNumber: fullPhoneNumber,
      countryCode: countryCode,
      portfolio: "La Vista Developments - Exclusive New Cairo & Capital",
      source: zapierData.landingPageUrl,
      agency: "properties-s.com",
      targetRecipients: [
        "Rahma@irtkaz.com",
        "Mostafa.a.ashmawy@gmail.com",
        "Mostafa.ashmawy@irtkaz.com"
      ]
    };

    // 1. Send to Zapier Webhook
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/25429357/uclzmpn/", {
        method: "POST",
        body: JSON.stringify(zapierData),
      });
      console.log("Lead dispatched to Zapier webhook successfully:", zapierData);
    } catch (zapierError) {
      console.error("Zapier Webhook Error:", zapierError);
    }

    // 2. Save lead to LocalStorage backup archive
    try {
      const existingLeads = JSON.parse(localStorage.getItem('properties_s_lavista_leads') || localStorage.getItem('lavista_inquiries') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('properties_s_lavista_leads', JSON.stringify(existingLeads));
      console.log('Lead archived locally:', leadData);
    } catch (err) {
      console.error('LocalStorage error:', err);
    }

    // 3. Backend email routing to all 3 specified emails
    try {
      await fetch("https://formsubmit.co/ajax/Rahma@irtkaz.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Lead: ${fullName} - La Vista Portfolio (properties-s.com)`,
          _cc: "Mostafa.a.ashmawy@gmail.com,Mostafa.ashmawy@irtkaz.com",
          _template: "table",
          "Full Name": fullName,
          "Phone Number": fullPhoneNumber,
          "Country Code": countryCode,
          "Portfolio": "La Vista Developments (New Cairo & Capital)",
          "Lead Source": "properties-s.com Landing Page",
          "Date & Time": leadData.formattedTime
        })
      });
    } catch (apiError) {
      console.warn("Email dispatch fallback triggered:", apiError);
    }

    // 4. Trigger Google Analytics & Google Ads Conversion Tracking
    try {
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'lead_form',
          event_label: 'La Vista Developments Inquiry',
          value: 1
        });
      }

      if (typeof gtag_report_conversion === 'function') {
        gtag_report_conversion();
      } else if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-10964877445/novGCO2LpqIdEIWBu-wo',
          'value': 1.0,
          'currency': 'EGP'
        });
      }
    } catch (trackingErr) {
      console.warn("Conversion tracking error:", trackingErr);
    }

    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;

    // Reset form fields
    form.reset();
    if (countryCodeInput) countryCodeInput.value = '+20';
    const flagDisplay = document.getElementById('selectedCountryFlag');
    const codeDisplay = document.getElementById('selectedCountryCodeText');
    if (flagDisplay) flagDisplay.textContent = '🇪🇬';
    if (codeDisplay) codeDisplay.textContent = '+20';

    // Show Inline Success Banner
    if (inlineSuccess) {
      inlineSuccess.style.display = 'block';
      setTimeout(() => {
        inlineSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }

    // Show Confirmation Modal
    if (modalBackdrop) {
      modalBackdrop.classList.add('show');
    }

    // Set up direct WhatsApp button in modal for instant chat
    if (modalWhatsAppBtn) {
      const encodedMsg = encodeURIComponent(`Hello, I just registered my interest for the La Vista Developments portfolio on properties-s.com. My name is ${fullName} (${fullPhoneNumber}). Please provide me with the available brochures and inventory.`);
      modalWhatsAppBtn.href = `https://wa.me/201277752731?text=${encodedMsg}`;
      modalWhatsAppBtn.setAttribute('onclick', 'return gtag_report_conversion(this.href);');
    }
  });

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('show');
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('show');
      }
    });
  }
}

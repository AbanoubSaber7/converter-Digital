const units = {
  bit: { value: 1, label: 'Bit (b)', labelAr: 'بت (ب)' },
  byte: { value: 8, label: 'Byte (B)', labelAr: 'بايت (ب)' },
  kb: { value: 8 * 1024, label: 'Kilobyte (KB)', labelAr: 'كيلوبايت (ك.ب)' },
  mb: { value: 8 * 1024 * 1024, label: 'Megabyte (MB)', labelAr: 'ميغابايت (م.ب)' },
  gb: { value: 8 * 1024 * 1024 * 1024, label: 'Gigabyte (GB)', labelAr: 'غيغابايت (غ.ب)' },
  tb: { value: 8 * 1024 * 1024 * 1024 * 1024, label: 'Terabyte (TB)', labelAr: 'تيرابايت (ت.ب)' }
};

const translations = {
  en: {
      'title': 'Digital Storage Units Converter',
      'header-title': 'Digital Storage Converter',
      'lang-toggle': 'العربية',
      'nav-home': 'Home',
      'nav-features': 'Features',
      'nav-converter': 'Converter',
      'nav-vision-mission': 'Vision & Mission',
      'nav-about': 'About',
      'nav-contact': 'Contact',
      'hero-title': 'Digital Storage Units Converter',
      'hero-subtitle': 'Quick and accurate digital storage unit conversions',
      'hero-cta': 'Start Converting Now',
      'features-title': 'Converter Features',
      'feature-fast-title': 'Fast Conversion',
      'feature-fast-desc': 'Instant conversion for all storage units',
      'feature-accuracy-title': 'High Accuracy',
      'feature-accuracy-desc': 'Precise and reliable results',
      'feature-responsive-title': 'Responsive Design',
      'feature-responsive-desc': 'Works on all devices',
      'converter-title': 'Converter',
      'converter-button': 'Open Converter',
      'vision-title': 'Vision',
      'vision-desc': 'To make digital storage conversions easy and accessible for everyone.',
      'mission-title': 'Mission',
      'mission-desc': 'Provide a user-friendly platform for converting digital storage units accurately.',
      'about-title': 'About the Developer',
      'about-desc': 'Developed by Nada (22510699), a passionate Web Technologies student.',
      'contact-title': 'Contact Us',
      'contact-email-label': 'Email:',
      'contact-email-placeholder': 'Enter your email',
      'contact-phone-label': 'Phone:',
      'contact-phone-placeholder': 'Enter your phone number',
      'contact-submit': 'Send Message',
      'converter-value-label': 'Value',
      'converter-value-placeholder': 'Enter value',
      'converter-from-label': 'From',
      'converter-to-label': 'To',
      'unit-bit': 'Bit (b)',
      'unit-byte': 'Byte (B)',
      'unit-kb': 'Kilobyte (KB)',
      'unit-mb': 'Megabyte (MB)',
      'unit-gb': 'Gigabyte (GB)',
      'unit-tb': 'Terabyte (TB)',
      'back-button': 'Back to Home',
      'history-title': 'Conversion History',
      'clear-history': 'Clear History',
      'no-history': 'No conversions yet',
      'dropdown-label': 'Conversion Options',
      'option-default': 'Select an Option',
      'option-common': 'Common Conversions',
      'option-advanced': 'Advanced Units'
  },
  ar: {
      'title': 'محول وحدات التخزين الرقمي',
      'header-title': 'محول وحدات التخزين',
      'lang-toggle': 'English',
      'nav-home': 'الرئيسية',
      'nav-features': 'الميزات',
      'nav-converter': 'المحول',
      'nav-vision-mission': 'الرؤية والمهمة',
      'nav-about': 'حول',
      'nav-contact': 'اتصل بنا',
      'hero-title': 'محول وحدات التخزين الرقمي',
      'hero-subtitle': 'تحويل سريع ودقيق لوحدات التخزين الرقمي',
      'hero-cta': 'ابدأ التحويل الآن',
      'features-title': 'ميزات المحول',
      'feature-fast-title': 'تحويل سريع',
      'feature-fast-desc': 'تحويل فوري لجميع وحدات التخزين',
      'feature-accuracy-title': 'دقة عالية',
      'feature-accuracy-desc': 'نتائج دقيقة وموثوقة',
      'feature-responsive-title': 'تصميم متجاوب',
      'feature-responsive-desc': 'يعمل على جميع الأجهزة',
      'converter-title': 'المحول',
      'converter-button': 'فتح المحول',
      'vision-title': 'الرؤية',
      'vision-desc': 'جعل تحويل وحدات التخزين الرقمي سهلاً ومتاحاً للجميع.',
      'mission-title': 'المهمة',
      'mission-desc': 'توفير منصة سهلة الاستخدام لتحويل وحدات التخزين الرقمي بدقة.',
      'about-title': 'حول المطور',
      'about-desc': 'تم التطوير بواسطة ندى (22510699)، طالبة تقنيات الويب المتحمسة.',
      'contact-title': 'اتصل بنا',
      'contact-email-label': 'البريد الإلكتروني:',
      'contact-email-placeholder': 'أدخل بريدك الإلكتروني',
      'contact-phone-label': 'الهاتف:',
      'contact-phone-placeholder': 'أدخل رقم هاتفك',
      'contact-submit': 'إرسال الرسالة',
      'converter-value-label': 'القيمة',
      'converter-value-placeholder': 'أدخل القيمة',
      'converter-from-label': 'من',
      'converter-to-label': 'إلى',
      'unit-bit': 'بت (ب)',
      'unit-byte': 'بايت (ب)',
      'unit-kb': 'كيلوبايت (ك.ب)',
      'unit-mb': 'ميغابايت (م.ب)',
      'unit-gb': 'غيغابايت (غ.ب)',
      'unit-tb': 'تيرابايت (ت.ب)',
      'back-button': 'العودة إلى الرئيسية',
      'history-title': 'سجل التحويلات',
      'clear-history': 'مسح السجل',
      'no-history': 'لا توجد تحويلات بعد',
      'dropdown-label': 'خيارات التحويل',
      'option-default': 'اختر خيارًا',
      'option-common': 'التحويلات الشائعة',
      'option-advanced': 'وحدات متقدمة'
  }
};

let currentLang = 'en';
let conversionHistory = [];
let lastScroll = 0;

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const langToggle = document.querySelector('#lang-toggle');
  const clearHistoryBtn = document.querySelector('#clear-history');

  // Menu toggle
  if (menuToggle) {
      menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          navMenu.classList.toggle('active');
      });
  }

  // Close menu on link click
  if (navMenu) {
      document.querySelectorAll('.nav-menu a').forEach(link => {
          link.addEventListener('click', () => {
              navMenu.classList.remove('active');
              menuToggle.classList.remove('active');
          });
      });
  }

  // Close menu on outside click
  document.addEventListener('click', function (e) {
      if (
          navMenu && navMenu.classList.contains('active') &&
          !navMenu.contains(e.target) &&
          !menuToggle.contains(e.target)
      ) {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
      }
  });

  // Language toggle
  if (langToggle) {
      langToggle.addEventListener('click', toggleLanguage);
  }

  // Clear history
  if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', clearHistory);
  }

  // Converter logic
  const swapIcon = document.querySelector('.swap-icon');
  const valueInput = document.getElementById('value');
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');

  if (swapIcon) swapIcon.addEventListener('click', swapUnits);
  if (valueInput) {
      valueInput.addEventListener('input', validateInput);
      valueInput.addEventListener('input', debounce(convertStorage, 500));
  }
  if (fromUnit) fromUnit.addEventListener('change', convertStorage);
  if (toUnit) toUnit.addEventListener('change', convertStorage);

  // Sticky header scroll behavior
  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('.main-header');
      if (currentScroll > lastScroll && currentScroll > 50) {
          header.classList.add('hide');
      } else {
          header.classList.remove('hide');
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Initialize language
  updateLanguage();
  updateHistory();
});

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  updateLanguage();
}

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[currentLang][key] || element.textContent;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = translations[currentLang][key] || element.placeholder;
  });

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelector('body').style.fontFamily = currentLang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Poppins', sans-serif'";
  updateUnitLabels();
}

function updateUnitLabels() {
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  if (fromUnit && toUnit) {
      const options = ['bit', 'byte', 'kb', 'mb', 'gb', 'tb'];
      [fromUnit, toUnit].forEach(select => {
          const selectedValue = select.value;
          select.innerHTML = options.map(unit => `
              <option value="${unit}" ${unit === selectedValue ? 'selected' : ''}>
                  ${currentLang === 'ar' ? units[unit].labelAr : units[unit].label}
              </option>
          `).join('');
      });
  }
}

function swapUnits() {
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  [fromUnit.value, toUnit.value] = [toUnit.value, fromUnit.value];
  convertStorage();
}

function validateInput(e) {
  if (e.target.value < 0) {
      e.target.value = 0;
  }
  e.target.value = convertArabicNumerals(e.target.value); // Convert Arabic numerals on input
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function convertStorage() {
  const inputElement = document.getElementById('value');
  let input = inputElement.value;
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const resultElement = document.getElementById('result');

  // Convert Arabic numerals to English before parsing
  input = convertArabicNumerals(input);

  if (!input && input !== 0) {
      resultElement.innerHTML = `<span style="color: #666;">${translations[currentLang]['no-history']}</span>`;
      return;
  }

  const result = (parseFloat(input) * units[from].value) / units[to].value;
  const formattedResult = formatNumber(result);
  const fromLabel = currentLang === 'ar' ? units[from].labelAr : units[from].label;
  const toLabel = currentLang === 'ar' ? units[to].labelAr : units[to].label;

  resultElement.innerHTML = `
      <span style="color: #3498db">${formatNumber(input)} ${fromLabel}</span>
      <span style="color: #666"> = </span>
      <span style="color: #2ecc71">${formattedResult} ${toLabel}</span>
  `;

  // Add to history
  conversionHistory.unshift({
      input: formatNumber(input),
      from: fromLabel,
      to: toLabel,
      result: formattedResult,
      timestamp: new Date().toLocaleString()
  });
  if (conversionHistory.length > 10) conversionHistory.pop(); // Limit to 10 entries
  updateHistory();
}

function applyConversionOption() {
  const option = document.getElementById('conversion-options').value;
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  const valueInput = document.getElementById('value');

  if (option === 'common') {
      valueInput.value = 1;
      fromUnit.value = 'mb';
      toUnit.value = 'gb';
  } else if (option === 'advanced') {
      valueInput.value = 1;
      fromUnit.value = 'gb';
      toUnit.value = 'tb';
  }
  convertStorage();
}

function formatNumber(num) {
  if (num === 0) return '0';
  if (num < 0.0001 || num > 999999999) return num.toExponential(4);
  return num.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4
  });
}

function updateHistory() {
  const historyList = document.getElementById('history-list');
  if (historyList) {
      historyList.innerHTML = conversionHistory.length > 0
          ? conversionHistory.map(item => `
              <li>
                  ${item.input} ${item.from} = ${item.result} ${item.to} <br>
                  <small>${item.timestamp}</small>
              </li>
          `).join('')
          : `<li>${translations[currentLang]['no-history']}</li>`;
  }
}

function clearHistory() {
  conversionHistory = [];
  updateHistory();
}

// Function to convert Arabic numerals to English numerals
function convertArabicNumerals(input) {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return input.split('').map(char => {
      const index = arabicNumerals.indexOf(char);
      return index !== -1 ? index : char;
  }).join('');
}

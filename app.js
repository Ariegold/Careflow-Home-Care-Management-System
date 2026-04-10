/* ============================
   KindTide — Application Logic
   Home Care Management System
   ============================ */

// ========================
// DATA STORE
// ========================

const DataStore = {
    patients: [
        { id: 1, name: 'Margaret Thompson', dob: '1948-03-15', diagnosis: 'Congestive Heart Failure', caregiver: 'Sarah Williams', authStatus: 'valid', status: 'active', allergies: 'Penicillin, Latex', dnr: true },
        { id: 2, name: 'Robert Chen', dob: '1955-07-22', diagnosis: 'Type 2 Diabetes', caregiver: 'James Rodriguez', authStatus: 'valid', status: 'active', allergies: 'None', dnr: false },
        { id: 3, name: 'Dorothy Evans', dob: '1940-11-08', diagnosis: 'Alzheimer\'s Disease', caregiver: 'Maria Santos', authStatus: 'expiring', status: 'active', allergies: 'Shellfish, Sulfa drugs', dnr: true },
        { id: 4, name: 'William Harris', dob: '1952-01-30', diagnosis: 'COPD', caregiver: 'Sarah Williams', authStatus: 'valid', status: 'active', allergies: 'Aspirin', dnr: false },
        { id: 5, name: 'Eleanor Martinez', dob: '1945-09-12', diagnosis: 'Osteoarthritis', caregiver: 'Aisha Johnson', authStatus: 'valid', status: 'active', allergies: 'Peanuts', dnr: false },
        { id: 6, name: 'James O\'Brien', dob: '1938-06-25', diagnosis: 'Parkinson\'s Disease', caregiver: 'David Kim', authStatus: 'expired', status: 'inactive', allergies: 'None', dnr: true },
        { id: 7, name: 'Patricia Wilson', dob: '1950-12-03', diagnosis: 'Hypertension', caregiver: 'Maria Santos', authStatus: 'valid', status: 'active', allergies: 'Codeine', dnr: false },
        { id: 8, name: 'George Baker', dob: '1943-04-18', diagnosis: 'Post-Stroke Rehabilitation', caregiver: 'James Rodriguez', authStatus: 'valid', status: 'active', allergies: 'Iodine', dnr: false },
    ],

    caregivers: [
        { id: 1, name: 'Sarah Williams', role: 'Registered Nurse', certification: 'RN, BSN', compliance: 'compliant', assignedPatients: 2, status: 'active', certExpiry: '2027-03-15', physicalExpiry: '2026-08-20' },
        { id: 2, name: 'James Rodriguez', role: 'Home Health Aide', certification: 'HHA Certified', compliance: 'compliant', assignedPatients: 2, status: 'active', certExpiry: '2026-11-30', physicalExpiry: '2026-06-15' },
        { id: 3, name: 'Maria Santos', role: 'Licensed Practical Nurse', certification: 'LPN', compliance: 'compliant', assignedPatients: 2, status: 'active', certExpiry: '2027-01-20', physicalExpiry: '2026-09-10' },
        { id: 4, name: 'Aisha Johnson', role: 'Physical Therapist', certification: 'DPT', compliance: 'compliant', assignedPatients: 1, status: 'active', certExpiry: '2027-06-30', physicalExpiry: '2026-12-01' },
        { id: 5, name: 'David Kim', role: 'Home Health Aide', certification: 'HHA Certified', compliance: 'non-compliant', assignedPatients: 1, status: 'active', certExpiry: '2026-04-01', physicalExpiry: '2026-03-01' },
        { id: 6, name: 'Rachel Turner', role: 'Occupational Therapist', certification: 'OTR/L', compliance: 'compliant', assignedPatients: 0, status: 'active', certExpiry: '2027-09-15', physicalExpiry: '2027-01-20' },
    ],

    authorisations: [
        { id: 'AUTH-2026-001', patientId: 1, patient: 'Margaret Thompson', serviceType: 'Skilled Nursing', authHours: 120, usedHours: 78, validFrom: '2026-01-15', validTo: '2026-07-15', status: 'valid' },
        { id: 'AUTH-2026-002', patientId: 2, patient: 'Robert Chen', serviceType: 'Home Health Aide', authHours: 200, usedHours: 145, validFrom: '2026-02-01', validTo: '2026-08-01', status: 'valid' },
        { id: 'AUTH-2026-003', patientId: 3, patient: 'Dorothy Evans', serviceType: 'Home Health Aide', authHours: 300, usedHours: 270, validFrom: '2025-12-01', validTo: '2026-06-01', status: 'expiring' },
        { id: 'AUTH-2026-004', patientId: 4, patient: 'William Harris', serviceType: 'Respiratory Therapy', authHours: 80, usedHours: 32, validFrom: '2026-03-01', validTo: '2026-09-01', status: 'valid' },
        { id: 'AUTH-2026-005', patientId: 5, patient: 'Eleanor Martinez', serviceType: 'Physical Therapy', authHours: 60, usedHours: 40, validFrom: '2026-01-20', validTo: '2026-07-20', status: 'valid' },
        { id: 'AUTH-2026-006', patientId: 6, patient: 'James O\'Brien', serviceType: 'Skilled Nursing', authHours: 100, usedHours: 100, validFrom: '2025-06-01', validTo: '2025-12-01', status: 'expired' },
        { id: 'AUTH-2026-007', patientId: 7, patient: 'Patricia Wilson', serviceType: 'Home Health Aide', authHours: 160, usedHours: 88, validFrom: '2026-02-15', validTo: '2026-08-15', status: 'valid' },
        { id: 'AUTH-2026-008', patientId: 8, patient: 'George Baker', serviceType: 'Physical Therapy', authHours: 90, usedHours: 55, validFrom: '2026-03-10', validTo: '2026-09-10', status: 'valid' },
    ],

    scheduleVisits: [
        { id: 1, patientId: 1, patient: 'Margaret Thompson', caregiver: 'Sarah Williams', type: 'nursing', time: '08:00', duration: 2, day: 0, status: 'confirmed' },
        { id: 2, patientId: 2, patient: 'Robert Chen', caregiver: 'James Rodriguez', type: 'hha', time: '09:00', duration: 4, day: 0, status: 'confirmed' },
        { id: 3, patientId: 5, patient: 'Eleanor Martinez', caregiver: 'Aisha Johnson', type: 'pt', time: '10:30', duration: 1, day: 0, status: 'pending' },
        { id: 4, patientId: 3, patient: 'Dorothy Evans', caregiver: 'Maria Santos', type: 'hha', time: '07:00', duration: 8, day: 0, status: 'confirmed' },
        { id: 5, patientId: 4, patient: 'William Harris', caregiver: 'Sarah Williams', type: 'nursing', time: '14:00', duration: 1, day: 0, status: 'pending' },
        { id: 6, patientId: 7, patient: 'Patricia Wilson', caregiver: 'Maria Santos', type: 'hha', time: '08:00', duration: 4, day: 1, status: 'confirmed' },
        { id: 7, patientId: 8, patient: 'George Baker', caregiver: 'James Rodriguez', type: 'pt', time: '11:00', duration: 1.5, day: 1, status: 'confirmed' },
        { id: 8, patientId: 1, patient: 'Margaret Thompson', caregiver: 'Sarah Williams', type: 'nursing', time: '08:00', duration: 2, day: 2, status: 'confirmed' },
        { id: 9, patientId: 5, patient: 'Eleanor Martinez', caregiver: 'Aisha Johnson', type: 'pt', time: '10:00', duration: 1, day: 2, status: 'confirmed' },
        { id: 10, patientId: 3, patient: 'Dorothy Evans', caregiver: 'Maria Santos', type: 'hha', time: '07:00', duration: 8, day: 2, status: 'confirmed' },
        { id: 11, patientId: 2, patient: 'Robert Chen', caregiver: 'James Rodriguez', type: 'hha', time: '09:00', duration: 4, day: 3, status: 'confirmed' },
        { id: 12, patientId: 4, patient: 'William Harris', caregiver: 'Sarah Williams', type: 'nursing', time: '14:00', duration: 1, day: 3, status: 'confirmed' },
        { id: 13, patientId: 7, patient: 'Patricia Wilson', caregiver: 'Maria Santos', type: 'hha', time: '08:00', duration: 4, day: 4, status: 'confirmed' },
        { id: 14, patientId: 8, patient: 'George Baker', caregiver: 'Aisha Johnson', type: 'pt', time: '11:00', duration: 1.5, day: 4, status: 'confirmed' },
        { id: 15, patientId: 1, patient: 'Margaret Thompson', caregiver: 'Sarah Williams', type: 'nursing', time: '08:00', duration: 2, day: 5, status: 'confirmed' },
    ],

    carePlans: [
        {
            id: 1, patientId: 1, patient: 'Margaret Thompson',
            type: 'Skilled Nursing Care',
            tasks: ['Vital signs monitoring (BP, HR, O2)', 'Medication management and administration', 'Wound care assessment', 'Patient education on heart failure management', 'Fluid intake monitoring'],
            goals: 'Maintain stable cardiac function, prevent hospital readmission, improve self-management skills.',
            startDate: '2026-01-15', endDate: '2026-07-15', status: 'active',
            rightsDocumented: true, dnrOnFile: true, allergiesDocumented: true
        },
        {
            id: 2, patientId: 2, patient: 'Robert Chen',
            type: 'Home Health Aide Services',
            tasks: ['Blood glucose monitoring', 'Meal preparation (diabetic diet)', 'Assistance with activities of daily living', 'Light housekeeping', 'Medication reminders'],
            goals: 'Maintain blood glucose within target range, support independence in daily activities.',
            startDate: '2026-02-01', endDate: '2026-08-01', status: 'active',
            rightsDocumented: true, dnrOnFile: false, allergiesDocumented: true
        },
        {
            id: 3, patientId: 3, patient: 'Dorothy Evans',
            type: 'Home Health Aide Services',
            tasks: ['Personal care assistance', 'Safety monitoring and fall prevention', 'Cognitive stimulation activities', 'Meal preparation', 'Companionship and emotional support', 'Medication reminders'],
            goals: 'Ensure patient safety, maintain quality of life, support cognitive function, prevent falls.',
            startDate: '2025-12-01', endDate: '2026-06-01', status: 'active',
            rightsDocumented: true, dnrOnFile: true, allergiesDocumented: true
        },
        {
            id: 4, patientId: 5, patient: 'Eleanor Martinez',
            type: 'Physical Therapy',
            tasks: ['Range of motion exercises', 'Strength training for lower extremities', 'Balance and gait training', 'Pain management techniques', 'Home exercise programme education'],
            goals: 'Improve mobility, reduce pain levels, prevent falls, enhance functional independence.',
            startDate: '2026-01-20', endDate: '2026-07-20', status: 'active',
            rightsDocumented: true, dnrOnFile: false, allergiesDocumented: true
        },
        {
            id: 5, patientId: 8, patient: 'George Baker',
            type: 'Physical Therapy & Skilled Nursing',
            tasks: ['Upper and lower extremity exercises', 'Speech coordination exercises', 'Activities of daily living retraining', 'Balance assessment', 'Neurological status monitoring'],
            goals: 'Restore functional mobility, improve speech coordination, achieve independence in ADLs.',
            startDate: '2026-03-10', endDate: '2026-09-10', status: 'active',
            rightsDocumented: true, dnrOnFile: false, allergiesDocumented: true
        },
    ],

    documentation: [
        {
            id: 1, patientId: 1, patient: 'Margaret Thompson', caregiver: 'Sarah Williams',
            date: '2026-04-09', time: '08:45',
            note: 'Patient alert and oriented x3 upon arrival. Vital signs: BP 132/78, HR 72, O2 98%. Administered morning medications as prescribed. Wound on left lower extremity assessed — healing well, no signs of infection. Dressing changed per protocol. Patient reports improved energy levels this week. Educated on sodium restriction and fluid monitoring. Patient verbalised understanding. No complaints of chest pain or shortness of breath.',
            mood: 'Positive', appearance: 'Well-groomed, appropriate dress',
            qualityFlags: ['Accurate', 'Comprehensive', 'Timely']
        },
        {
            id: 2, patientId: 3, patient: 'Dorothy Evans', caregiver: 'Maria Santos',
            date: '2026-04-09', time: '07:30',
            note: 'Arrived at patient\'s residence at 07:00. Patient found in bed, appeared well-rested. Assisted with morning hygiene routine and dressing. Prepared breakfast — oatmeal with berries (confirmed no shellfish content per allergy protocol). Engaged in cognitive stimulation activity (photo album review). Patient was responsive and engaged. No falls or safety incidents during shift. Medication reminders given at scheduled times.',
            mood: 'Calm, engaged', appearance: 'Clean, comfortable attire',
            qualityFlags: ['Accurate', 'Comprehensive', 'Timely', 'Relevant']
        },
        {
            id: 3, patientId: 2, patient: 'Robert Chen', caregiver: 'James Rodriguez',
            date: '2026-04-08', time: '09:15',
            note: 'Blood glucose reading at 09:00: 142 mg/dL (within target). Prepared diabetic-appropriate lunch. Assisted with shower and grooming. Light housekeeping completed — kitchen and bathroom. Patient in good spirits, reported sleeping well. No complaints of pain or discomfort. Mobility remains stable.',
            mood: 'Good spirits', appearance: 'Clean after shower assistance',
            qualityFlags: ['Accurate', 'Timely']
        },
        {
            id: 4, patientId: 5, patient: 'Eleanor Martinez', caregiver: 'Aisha Johnson',
            date: '2026-04-08', time: '10:45',
            note: 'Physical therapy session conducted. Performed 20 minutes of range of motion exercises for both knees. Completed 15 minutes of balance training using parallel bars. Patient reports pain level 4/10 (improved from 6/10 at previous visit). Gait assessment shows improved stride length. Reviewed home exercise programme — patient demonstrating correct form. Next session scheduled for Thursday.',
            mood: 'Motivated', appearance: 'Appropriate athletic wear',
            qualityFlags: ['Accurate', 'Comprehensive', 'Consistent', 'Relevant']
        },
    ],

    billing: [
        { id: 'INV-2026-0142', patientId: 1, patient: 'Margaret Thompson', serviceDate: '2026-04-07', amount: 285.00, format: 'cms1500', status: 'paid' },
        { id: 'INV-2026-0143', patientId: 2, patient: 'Robert Chen', serviceDate: '2026-04-07', amount: 192.00, format: 'ub04', status: 'submitted' },
        { id: 'INV-2026-0144', patientId: 3, patient: 'Dorothy Evans', serviceDate: '2026-04-07', amount: 384.00, format: 'ub04', status: 'paid' },
        { id: 'INV-2026-0145', patientId: 5, patient: 'Eleanor Martinez', serviceDate: '2026-04-08', amount: 175.00, format: 'cms1500', status: 'submitted' },
        { id: 'INV-2026-0146', patientId: 4, patient: 'William Harris', serviceDate: '2026-04-08', amount: 142.50, format: 'cms1500', status: 'pending' },
        { id: 'INV-2026-0147', patientId: 7, patient: 'Patricia Wilson', serviceDate: '2026-04-08', amount: 192.00, format: 'private', status: 'overdue' },
        { id: 'INV-2026-0148', patientId: 8, patient: 'George Baker', serviceDate: '2026-04-09', amount: 262.50, format: 'cms1500', status: 'submitted' },
        { id: 'INV-2026-0149', patientId: 6, patient: 'James O\'Brien', serviceDate: '2026-03-28', amount: 285.00, format: 'ub04', status: 'denied' },
    ],

    complianceRecords: [
        { caregiverId: 1, caregiver: 'Sarah Williams', document: 'Nursing Licence', expiry: '2027-03-15', status: 'compliant' },
        { caregiverId: 1, caregiver: 'Sarah Williams', document: 'Physical Examination', expiry: '2026-08-20', status: 'compliant' },
        { caregiverId: 2, caregiver: 'James Rodriguez', document: 'HHA Certification', expiry: '2026-11-30', status: 'compliant' },
        { caregiverId: 2, caregiver: 'James Rodriguez', document: 'CPR/BLS Certification', expiry: '2026-06-15', status: 'expiring' },
        { caregiverId: 3, caregiver: 'Maria Santos', document: 'LPN Licence', expiry: '2027-01-20', status: 'compliant' },
        { caregiverId: 3, caregiver: 'Maria Santos', document: 'Physical Examination', expiry: '2026-09-10', status: 'compliant' },
        { caregiverId: 4, caregiver: 'Aisha Johnson', document: 'DPT Licence', expiry: '2027-06-30', status: 'compliant' },
        { caregiverId: 5, caregiver: 'David Kim', document: 'HHA Certification', expiry: '2026-04-01', status: 'non-compliant' },
        { caregiverId: 5, caregiver: 'David Kim', document: 'Physical Examination', expiry: '2026-03-01', status: 'non-compliant' },
        { caregiverId: 6, caregiver: 'Rachel Turner', document: 'OT Licence', expiry: '2027-09-15', status: 'compliant' },
        { caregiverId: 5, caregiver: 'David Kim', document: 'TB Test', expiry: '2026-02-15', status: 'non-compliant' },
        { caregiverId: 4, caregiver: 'Aisha Johnson', document: 'In-Service Training', expiry: '2026-12-01', status: 'compliant' },
    ]
};

// ========================
// UTILITY FUNCTIONS
// ========================

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getWeekDates(offset = 0) {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - today.getDay() + 1 + (offset * 7));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        dates.push(d);
    }
    return dates;
}

function getDayName(date) {
    return date.toLocaleDateString('en-GB', { weekday: 'short' });
}

function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span class="toast-message">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

// ========================
// NAVIGATION
// ========================

const pageTitles = {
    dashboard: { title: 'Dashboard', subtitle: 'Home Care Operations Overview' },
    analysis: { title: 'Transcript Analysis', subtitle: 'Structured Industry Insights Report' },
    patients: { title: 'Patients', subtitle: 'Client Registry & Records' },
    caregivers: { title: 'Caregivers', subtitle: 'Staff Management & Onboarding' },
    scheduling: { title: 'Scheduling', subtitle: 'Visit Coordination & Calendar' },
    careplans: { title: 'Care Plans', subtitle: 'Service Plans & Assessments' },
    documentation: { title: 'Documentation', subtitle: 'Clinical Notes & Charting' },
    compliance: { title: 'Compliance & EVV', subtitle: 'Electronic Visit Verification & Document Tracking' },
    billing: { title: 'Billing', subtitle: 'Invoicing & Claims Management' },
    authorisations: { title: 'Authorisations', subtitle: 'Service Authorization Tracking' },
};

function navigateTo(pageName) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const navItem = document.querySelector(`[data-page="${pageName}"]`);
    if (navItem) navItem.classList.add('active');

    // Update page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(`page-${pageName}`);
    if (page) {
        page.classList.remove('active');
        // Force reflow for animation
        void page.offsetWidth;
        page.classList.add('active');
    }

    // Update title
    const info = pageTitles[pageName];
    if (info) {
        document.getElementById('pageTitle').textContent = info.title;
        document.getElementById('pageSubtitle').textContent = info.subtitle;
    }

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');

    // Render page content
    renderPage(pageName);
}

// ========================
// RENDER FUNCTIONS
// ========================

function renderPage(pageName) {
    switch (pageName) {
        case 'dashboard': renderDashboard(); break;
        case 'analysis': renderAnalysis(); break;
        case 'patients': renderPatients(); break;
        case 'caregivers': renderCaregivers(); break;
        case 'scheduling': renderSchedule(); break;
        case 'careplans': renderCarePlans(); break;
        case 'documentation': renderDocumentation(); break;
        case 'compliance': renderCompliance(); break;
        case 'billing': renderBilling(); break;
        case 'authorisations': renderAuthorisations(); break;
    }
}

// --- Dashboard ---
function renderDashboard() {
    // KPIs
    document.getElementById('kpiPatients').textContent = DataStore.patients.filter(p => p.status === 'active').length;
    document.getElementById('kpiCaregivers').textContent = DataStore.caregivers.filter(c => c.status === 'active').length;
    document.getElementById('kpiVisits').textContent = DataStore.scheduleVisits.length;
    // EVV compliance - based on verified visits vs total visits
    const totalVisits = DataStore.scheduleVisits.length;
    const confirmedVisits = DataStore.scheduleVisits.filter(v => v.status === 'confirmed').length;
    const evvPctKPI = totalVisits > 0 ? Math.round((confirmedVisits / totalVisits) * 100) : 0;
    document.getElementById('kpiCompliance').textContent = evvPctKPI + '%';

    // Today's Schedule
    const schedList = document.getElementById('dashScheduleList');
    const todayVisits = DataStore.scheduleVisits.filter(v => v.day === 0).sort((a, b) => a.time.localeCompare(b.time));
    schedList.innerHTML = todayVisits.map(v => `
        <div class="schedule-item">
            <span class="schedule-time">${v.time}</span>
            <span class="schedule-dot schedule-dot--${v.type}"></span>
            <div class="schedule-info">
                <div class="schedule-patient">${v.patient}</div>
                <div class="schedule-caregiver">${v.caregiver} · ${v.duration}h ${v.type.toUpperCase()}</div>
            </div>
            <span class="schedule-status status--${v.status}">${v.status}</span>
        </div>
    `).join('');

    // Alerts
    const alertsList = document.getElementById('dashAlertsList');
    const alerts = [];

    // Check expiring authorisations
    DataStore.authorisations.filter(a => a.status === 'expiring').forEach(a => {
        alerts.push({ type: 'warning', title: `Authorisation expiring: ${a.patient}`, desc: `${a.serviceType} auth expires ${formatDate(a.validTo)}` });
    });

    // Check non-compliant staff
    DataStore.complianceRecords.filter(r => r.status === 'non-compliant').forEach(r => {
        alerts.push({ type: 'danger', title: `Compliance alert: ${r.caregiver}`, desc: `${r.document} expired ${formatDate(r.expiry)}` });
    });

    // Check expiring documents
    DataStore.complianceRecords.filter(r => r.status === 'expiring').forEach(r => {
        alerts.push({ type: 'warning', title: `Document expiring: ${r.caregiver}`, desc: `${r.document} expires ${formatDate(r.expiry)}` });
    });

    alertsList.innerHTML = alerts.slice(0, 5).map(a => `
        <div class="alert-item alert-item--${a.type}">
            <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="${a.type === 'danger' ? 'var(--accent-red)' : a.type === 'warning' ? 'var(--accent-amber)' : 'var(--accent-blue)'}" stroke-width="2">
                ${a.type === 'danger'
                    ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                    : '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'}
            </svg>
            <div class="alert-content">
                <div class="alert-title">${a.title}</div>
                <div class="alert-desc">${a.desc}</div>
            </div>
        </div>
    `).join('');

    // Compliance Overview
    const compOverview = document.getElementById('dashComplianceOverview');
    const evvPct = 97;
    const docPct = Math.round((DataStore.complianceRecords.filter(r => r.status === 'compliant').length / DataStore.complianceRecords.length) * 100);
    const authPct = Math.round((DataStore.authorisations.filter(a => a.status === 'valid').length / DataStore.authorisations.length) * 100);

    compOverview.innerHTML = `
        <div class="compliance-bar">
            <div class="compliance-bar-header">
                <span class="compliance-bar-label">EVV Verification</span>
                <span class="compliance-bar-value">${evvPct}%</span>
            </div>
            <div class="compliance-bar-track"><div class="compliance-bar-fill compliance-bar-fill--green" style="width:${evvPct}%"></div></div>
        </div>
        <div class="compliance-bar">
            <div class="compliance-bar-header">
                <span class="compliance-bar-label">Document Compliance</span>
                <span class="compliance-bar-value">${docPct}%</span>
            </div>
            <div class="compliance-bar-track"><div class="compliance-bar-fill compliance-bar-fill--blue" style="width:${docPct}%"></div></div>
        </div>
        <div class="compliance-bar">
            <div class="compliance-bar-header">
                <span class="compliance-bar-label">Authorization Validity</span>
                <span class="compliance-bar-value">${authPct}%</span>
            </div>
            <div class="compliance-bar-track"><div class="compliance-bar-fill compliance-bar-fill--amber" style="width:${authPct}%"></div></div>
        </div>
    `;

    // Recent Documentation
    const docList = document.getElementById('dashDocList');
    docList.innerHTML = DataStore.documentation.slice(0, 4).map(d => `
        <div class="doc-item">
            <div class="doc-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div class="doc-item-info">
                <div class="doc-item-title">${d.patient}</div>
                <div class="doc-item-meta">${d.caregiver} · ${formatDate(d.date)}</div>
            </div>
            <div class="doc-item-score doc-score--${d.qualityFlags.length >= 3 ? 'high' : 'medium'}">
                <span class="doc-score-dot"></span>
                ${d.qualityFlags.length}/${6} quality
            </div>
        </div>
    `).join('');
}

// --- Analysis ---
function renderAnalysis() {
    document.getElementById('analysisDate').textContent = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
}

// --- Patients ---
function renderPatients() {
    const tbody = document.getElementById('patientsTableBody');
    tbody.innerHTML = DataStore.patients.map(p => `
        <tr>
            <td class="table-name">${p.name}</td>
            <td>${formatDate(p.dob)}</td>
            <td>${p.diagnosis}</td>
            <td>${p.caregiver}</td>
            <td><span class="schedule-status status--${p.authStatus}">${p.authStatus}</span></td>
            <td><span class="schedule-status status--${p.status}">${p.status}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-action-btn" title="View" onclick="viewPatient(${p.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    <button class="table-action-btn" title="Edit" onclick="editPatient(${p.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// --- Caregivers ---
function renderCaregivers() {
    const tbody = document.getElementById('caregiversTableBody');
    tbody.innerHTML = DataStore.caregivers.map(c => `
        <tr>
            <td class="table-name">${c.name}</td>
            <td>${c.role}</td>
            <td>${c.certification}</td>
            <td><span class="schedule-status status--${c.compliance}">${c.compliance}</span></td>
            <td>${c.assignedPatients}</td>
            <td><span class="schedule-status status--${c.status}">${c.status}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-action-btn" title="View" onclick="viewCaregiver(${c.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    <button class="table-action-btn" title="Edit">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// --- Scheduling ---
let scheduleWeekOffset = 0;

function renderSchedule() {
    const grid = document.getElementById('scheduleGrid');
    const dates = getWeekDates(scheduleWeekOffset);
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Update week label
    const startStr = dates[0].toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const endStr = dates[6].toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    document.getElementById('schedWeekLabel').textContent = `${startStr} — ${endStr}`;

    grid.innerHTML = dates.map((date, i) => {
        const dayVisits = DataStore.scheduleVisits.filter(v => v.day === i).sort((a, b) => a.time.localeCompare(b.time));
        return `
            <div class="schedule-day ${isToday(date) ? 'today' : ''}">
                <div class="schedule-day-header">
                    <div class="schedule-day-name">${dayNames[i]}</div>
                    <div class="schedule-day-date">${date.getDate()}</div>
                </div>
                <div class="schedule-day-body">
                    ${dayVisits.map(v => `
                        <div class="schedule-visit schedule-visit--${v.type}" title="${v.patient} — ${v.caregiver}">
                            <div class="visit-time">${v.time} · ${v.duration}h</div>
                            <div class="visit-patient">${v.patient}</div>
                            <div class="visit-caregiver">${v.caregiver}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// --- Care Plans ---
function renderCarePlans() {
    const grid = document.getElementById('carePlanGrid');
    grid.innerHTML = DataStore.carePlans.map(cp => `
        <div class="careplan-card">
            <div class="careplan-card-header">
                <div>
                    <div class="careplan-patient">${cp.patient}</div>
                    <div class="careplan-type">${cp.type}</div>
                </div>
                <span class="schedule-status status--${cp.status}">${cp.status}</span>
            </div>
            <div class="careplan-card-body">
                <div class="careplan-section">
                    <div class="careplan-section-label">Goals</div>
                    <div class="careplan-section-value">${cp.goals}</div>
                </div>
                <div class="careplan-section">
                    <div class="careplan-section-label">Service Tasks</div>
                    <ul class="careplan-tasks">
                        ${cp.tasks.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
                <div class="careplan-section">
                    <div class="careplan-section-label">Client Folder Documentation</div>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.25rem;">
                        <span class="quality-badge ${cp.rightsDocumented ? 'quality-badge--pass' : 'quality-badge--warn'}">${cp.rightsDocumented ? '✓' : '!'} Rights & Responsibilities</span>
                        <span class="quality-badge ${cp.dnrOnFile ? 'quality-badge--pass' : 'quality-badge--warn'}">${cp.dnrOnFile ? '✓' : '—'} DNR</span>
                        <span class="quality-badge ${cp.allergiesDocumented ? 'quality-badge--pass' : 'quality-badge--warn'}">${cp.allergiesDocumented ? '✓' : '!'} Allergies</span>
                    </div>
                </div>
            </div>
            <div class="careplan-card-footer">
                <div class="careplan-dates">${formatDate(cp.startDate)} — ${formatDate(cp.endDate)}</div>
                <button class="btn btn--outline" style="padding:0.4rem 0.75rem;font-size:0.75rem;" onclick="viewCarePlan(${cp.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

// --- Documentation ---
function renderDocumentation() {
    const container = document.getElementById('docEntries');
    container.innerHTML = DataStore.documentation.map(d => `
        <div class="doc-entry">
            <div class="doc-entry-header">
                <span class="doc-entry-patient">${d.patient}</span>
                <span class="doc-entry-date">${formatDate(d.date)} at ${d.time}</span>
            </div>
            <div class="doc-entry-body">${d.note}</div>
            <div class="doc-entry-footer">
                <span class="doc-entry-meta">By ${d.caregiver}</span>
                <span class="doc-entry-meta">Mood: ${d.mood}</span>
                <span class="doc-entry-meta">Appearance: ${d.appearance}</span>
                <div class="doc-entry-quality">
                    ${d.qualityFlags.map(f => `<span class="quality-badge quality-badge--pass">${f}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// --- Compliance ---
function renderCompliance() {
    const tbody = document.getElementById('complianceTableBody');
    tbody.innerHTML = DataStore.complianceRecords.map(r => `
        <tr>
            <td class="table-name">${r.caregiver}</td>
            <td>${r.document}</td>
            <td>${formatDate(r.expiry)}</td>
            <td><span class="schedule-status status--${r.status}">${r.status}</span></td>
            <td>
                <button class="btn btn--outline" style="padding:0.3rem 0.6rem;font-size:0.6875rem;" onclick="showToast('Renewal reminder sent to ${r.caregiver}', 'success')">
                    Send Reminder
                </button>
            </td>
        </tr>
    `).join('');
}

// --- Billing ---
function renderBilling() {
    const tbody = document.getElementById('billingTableBody');
    const formatLabels = { ub04: 'UB-04', cms1500: 'CMS-1500', private: 'Private Pay' };
    tbody.innerHTML = DataStore.billing.map(b => `
        <tr>
            <td class="table-name">${b.id}</td>
            <td>${b.patient}</td>
            <td>${formatDate(b.serviceDate)}</td>
            <td>£${b.amount.toFixed(2)}</td>
            <td>${formatLabels[b.format] || b.format}</td>
            <td><span class="schedule-status status--${b.status}">${b.status}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-action-btn" title="View">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// --- Authorisations ---
function renderAuthorisations() {
    const tbody = document.getElementById('authTableBody');
    tbody.innerHTML = DataStore.authorisations.map(a => {
        const pct = Math.round((a.usedHours / a.authHours) * 100);
        return `
            <tr>
                <td class="table-name">${a.id}</td>
                <td>${a.patient}</td>
                <td>${a.serviceType}</td>
                <td>${a.authHours}h</td>
                <td>
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                        <span>${a.usedHours}h</span>
                        <div class="compliance-bar-track" style="width:60px;height:4px;">
                            <div class="compliance-bar-fill ${pct > 90 ? 'compliance-bar-fill--amber' : 'compliance-bar-fill--green'}" style="width:${pct}%"></div>
                        </div>
                        <span style="font-size:0.6875rem;color:var(--text-muted)">${pct}%</span>
                    </div>
                </td>
                <td>${formatDate(a.validFrom)}</td>
                <td>${formatDate(a.validTo)}</td>
                <td><span class="schedule-status status--${a.status}">${a.status}</span></td>
            </tr>
        `;
    }).join('');
}

// ========================
// MODAL SYSTEM
// ========================

const modal = {
    overlay: null,
    container: null,
    titleEl: null,
    bodyEl: null,
    saveBtn: null,
    currentType: null,

    init() {
        this.overlay = document.getElementById('modalOverlay');
        this.container = document.getElementById('modalContainer');
        this.titleEl = document.getElementById('modalTitle');
        this.bodyEl = document.getElementById('modalBody');
        this.saveBtn = document.getElementById('modalSave');

        document.getElementById('modalClose').addEventListener('click', () => this.close());
        document.getElementById('modalCancel').addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
    },

    open(title, formHTML, onSave) {
        this.titleEl.textContent = title;
        this.bodyEl.innerHTML = formHTML;
        this.overlay.classList.add('active');

        // Remove old listener
        const newSaveBtn = this.saveBtn.cloneNode(true);
        this.saveBtn.parentNode.replaceChild(newSaveBtn, this.saveBtn);
        this.saveBtn = newSaveBtn;

        this.saveBtn.addEventListener('click', () => {
            if (onSave) onSave();
            this.close();
        });
    },

    close() {
        this.overlay.classList.remove('active');
    }
};

// ========================
// FORM TEMPLATES & ACTIONS
// ========================

function openAddPatientModal() {
    const html = `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">First Name</label>
                <input class="form-input" id="patientFirstName" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label class="form-label">Last Name</label>
                <input class="form-input" id="patientLastName" placeholder="Enter last name">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input class="form-input" type="date" id="patientDOB">
            </div>
            <div class="form-group">
                <label class="form-label">Primary Diagnosis</label>
                <input class="form-input" id="patientDiagnosis" placeholder="Enter diagnosis">
            </div>
        </div>
        <div class="form-group">
            <label class="form-label">Assigned Caregiver</label>
            <select class="form-select" id="patientCaregiver">
                ${DataStore.caregivers.filter(c => c.status === 'active').map(c => `<option value="${c.name}">${c.name} — ${c.role}</option>`).join('')}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Known Allergies</label>
            <input class="form-input" id="patientAllergies" placeholder="e.g. Penicillin, Latex (leave empty if none)">
        </div>
        <div class="form-group">
            <label class="form-label">DNR on File</label>
            <select class="form-select" id="patientDNR">
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
        </div>
    `;

    modal.open('Add New Patient', html, () => {
        const firstName = document.getElementById('patientFirstName').value.trim();
        const lastName = document.getElementById('patientLastName').value.trim();
        if (!firstName || !lastName) {
            showToast('Please enter patient name', 'error');
            return;
        }

        const newPatient = {
            id: generateId(),
            name: `${firstName} ${lastName}`,
            dob: document.getElementById('patientDOB').value,
            diagnosis: document.getElementById('patientDiagnosis').value,
            caregiver: document.getElementById('patientCaregiver').value,
            authStatus: 'pending',
            status: 'active',
            allergies: document.getElementById('patientAllergies').value || 'None',
            dnr: document.getElementById('patientDNR').value === 'true'
        };

        DataStore.patients.push(newPatient);
        renderPatients();
        showToast(`Patient ${newPatient.name} added successfully`);
    });
}

function openAddCaregiverModal() {
    const html = `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">First Name</label>
                <input class="form-input" id="cgFirstName" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label class="form-label">Last Name</label>
                <input class="form-input" id="cgLastName" placeholder="Enter last name">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Role</label>
                <select class="form-select" id="cgRole">
                    <option value="Home Health Aide">Home Health Aide</option>
                    <option value="Registered Nurse">Registered Nurse</option>
                    <option value="Licensed Practical Nurse">Licensed Practical Nurse</option>
                    <option value="Physical Therapist">Physical Therapist</option>
                    <option value="Occupational Therapist">Occupational Therapist</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Certification</label>
                <input class="form-input" id="cgCert" placeholder="e.g. RN, BSN">
            </div>
        </div>
        <div class="form-group">
            <label class="form-label">Certification Expiry Date</label>
            <input class="form-input" type="date" id="cgCertExpiry">
        </div>
        <div class="form-group">
            <label class="form-label">Physical Examination Expiry</label>
            <input class="form-input" type="date" id="cgPhysicalExpiry">
        </div>
    `;

    modal.open('Add New Caregiver', html, () => {
        const firstName = document.getElementById('cgFirstName').value.trim();
        const lastName = document.getElementById('cgLastName').value.trim();
        if (!firstName || !lastName) {
            showToast('Please enter caregiver name', 'error');
            return;
        }

        const newCG = {
            id: generateId(),
            name: `${firstName} ${lastName}`,
            role: document.getElementById('cgRole').value,
            certification: document.getElementById('cgCert').value,
            compliance: 'compliant',
            assignedPatients: 0,
            status: 'active',
            certExpiry: document.getElementById('cgCertExpiry').value,
            physicalExpiry: document.getElementById('cgPhysicalExpiry').value
        };

        DataStore.caregivers.push(newCG);
        renderCaregivers();
        showToast(`Caregiver ${newCG.name} onboarded successfully`);
    });
}

function openScheduleVisitModal() {
    // Check authorisations before scheduling
    const activePatients = DataStore.patients.filter(p => p.status === 'active');
    const activeCaregivers = DataStore.caregivers.filter(c => c.status === 'active' && c.compliance === 'compliant');

    const html = `
        <div class="form-group">
            <label class="form-label">Patient</label>
            <select class="form-select" id="visitPatient">
                ${activePatients.map(p => {
                    const auth = DataStore.authorisations.find(a => a.patientId === p.id && a.status === 'valid');
                    const authLabel = auth ? ` (Auth: ${auth.authHours - auth.usedHours}h remaining)` : ' ⚠ No valid auth';
                    return `<option value="${p.id}" ${!auth ? 'style="color:var(--accent-amber)"' : ''}>${p.name}${authLabel}</option>`;
                }).join('')}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Caregiver (Compliant Staff Only)</label>
            <select class="form-select" id="visitCaregiver">
                ${activeCaregivers.map(c => `<option value="${c.name}">${c.name} — ${c.role}</option>`).join('')}
            </select>
            ${activeCaregivers.length === 0 ? '<p style="color:var(--accent-red);font-size:0.75rem;margin-top:0.25rem;">No compliant caregivers available</p>' : ''}
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Visit Type</label>
                <select class="form-select" id="visitType">
                    <option value="nursing">Nursing Visit</option>
                    <option value="hha">Home Health Aide</option>
                    <option value="pt">Physical Therapy</option>
                    <option value="custom">Custom Visit</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Duration (Hours)</label>
                <input class="form-input" type="number" id="visitDuration" value="2" min="0.5" max="12" step="0.5">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Time</label>
                <input class="form-input" type="time" id="visitTime" value="09:00">
            </div>
            <div class="form-group">
                <label class="form-label">Day of Week</label>
                <select class="form-select" id="visitDay">
                    <option value="0">Monday</option>
                    <option value="1">Tuesday</option>
                    <option value="2">Wednesday</option>
                    <option value="3">Thursday</option>
                    <option value="4">Friday</option>
                    <option value="5">Saturday</option>
                    <option value="6">Sunday</option>
                </select>
            </div>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.15);border-radius:8px;padding:0.75rem 1rem;margin-top:0.5rem;">
            <p style="font-size:0.75rem;color:var(--accent-amber);font-weight:500;">⚠ Authorisation Validation</p>
            <p style="font-size:0.6875rem;color:var(--text-muted);margin-top:0.25rem;">Visits cannot be scheduled if the patient's authorisation is expired or invalid. Overtime restrictions are enforced automatically.</p>
        </div>
    `;

    modal.open('Schedule Visit', html, () => {
        const patientId = parseInt(document.getElementById('visitPatient').value);
        const patient = DataStore.patients.find(p => p.id === patientId);
        const auth = DataStore.authorisations.find(a => a.patientId === patientId && (a.status === 'valid' || a.status === 'expiring'));

        if (!auth) {
            showToast(`Cannot schedule: No valid authorisation for ${patient.name}`, 'error');
            return;
        }

        const duration = parseFloat(document.getElementById('visitDuration').value);
        if (auth.usedHours + duration > auth.authHours) {
            showToast(`Cannot schedule: Would exceed authorised hours (${auth.authHours - auth.usedHours}h remaining)`, 'error');
            return;
        }

        // Check caregiver overtime (max 40h per week)
        const caregiverName = document.getElementById('visitCaregiver').value;
        const weekHours = DataStore.scheduleVisits
            .filter(v => v.caregiver === caregiverName)
            .reduce((sum, v) => sum + v.duration, 0);

        if (weekHours + duration > 40) {
            showToast(`Overtime restriction: ${caregiverName} would exceed 40h/week (${40 - weekHours}h available)`, 'warning');
            return;
        }

        const newVisit = {
            id: generateId(),
            patientId,
            patient: patient.name,
            caregiver: caregiverName,
            type: document.getElementById('visitType').value,
            time: document.getElementById('visitTime').value,
            duration,
            day: parseInt(document.getElementById('visitDay').value),
            status: 'confirmed'
        };

        DataStore.scheduleVisits.push(newVisit);
        auth.usedHours += duration;
        renderSchedule();
        showToast(`Visit scheduled for ${patient.name}`);
    });
}

function openNewDocModal() {
    const html = `
        <div class="form-group">
            <label class="form-label">Patient</label>
            <select class="form-select" id="docPatient">
                ${DataStore.patients.filter(p => p.status === 'active').map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Caregiver</label>
            <select class="form-select" id="docCaregiver">
                ${DataStore.caregivers.filter(c => c.status === 'active').map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Patient Mood</label>
                <input class="form-input" id="docMood" placeholder="e.g. Calm, Positive, Anxious">
            </div>
            <div class="form-group">
                <label class="form-label">Appearance</label>
                <input class="form-input" id="docAppearance" placeholder="e.g. Well-groomed, comfortable attire">
            </div>
        </div>
        <div class="form-group">
            <label class="form-label">Clinical Note</label>
            <textarea class="form-textarea" id="docNote" rows="6" placeholder="Document the patient's condition, activities, interventions, and outcomes..."></textarea>
        </div>
        <div style="background:rgba(110,231,183,0.04);border:1px solid rgba(110,231,183,0.12);border-radius:8px;padding:0.75rem 1rem;margin-top:0.5rem;">
            <p style="font-size:0.75rem;color:var(--accent-green);font-weight:500;">📋 Documentation Checklist</p>
            <p style="font-size:0.6875rem;color:var(--text-muted);margin-top:0.25rem;line-height:1.6;">
                ✓ Is it <strong>accurate</strong>? ✓ Is it <strong>accessible</strong> to the care team?<br>
                ✓ Is it <strong>comprehensive</strong>? ✓ Is it <strong>consistent</strong> with previous notes?<br>
                ✓ Is it <strong>timely</strong>? ✓ Is it <strong>relevant</strong> to care delivery?
            </p>
        </div>
    `;

    modal.open('New Documentation Note', html, () => {
        const note = document.getElementById('docNote').value.trim();
        if (!note) {
            showToast('Please enter a clinical note', 'error');
            return;
        }

        const patientId = parseInt(document.getElementById('docPatient').value);
        const patient = DataStore.patients.find(p => p.id === patientId);

        // Auto-assess quality flags
        const flags = [];
        if (note.length > 50) flags.push('Comprehensive');
        if (document.getElementById('docMood').value) flags.push('Accurate');
        flags.push('Timely');
        if (note.length < 500) flags.push('Relevant');

        const newDoc = {
            id: generateId(),
            patientId,
            patient: patient.name,
            caregiver: document.getElementById('docCaregiver').value,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            note,
            mood: document.getElementById('docMood').value || 'Not specified',
            appearance: document.getElementById('docAppearance').value || 'Not specified',
            qualityFlags: flags
        };

        DataStore.documentation.unshift(newDoc);
        renderDocumentation();
        showToast('Documentation note saved successfully');
    });
}

function openNewCarePlanModal() {
    const html = `
        <div class="form-group">
            <label class="form-label">Patient</label>
            <select class="form-select" id="cpPatient">
                ${DataStore.patients.filter(p => p.status === 'active').map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Service Type</label>
            <select class="form-select" id="cpType">
                <option value="Home Health Aide Services">Home Health Aide Services</option>
                <option value="Skilled Nursing Care">Skilled Nursing Care</option>
                <option value="Physical Therapy">Physical Therapy</option>
                <option value="Occupational Therapy">Occupational Therapy</option>
                <option value="Physical Therapy & Skilled Nursing">PT & Skilled Nursing</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Goals</label>
            <textarea class="form-textarea" id="cpGoals" rows="3" placeholder="Define care plan goals..."></textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Service Tasks (one per line)</label>
            <textarea class="form-textarea" id="cpTasks" rows="4" placeholder="Enter each task on a new line&#10;e.g. Vital signs monitoring&#10;Medication management&#10;Patient education"></textarea>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Start Date</label>
                <input class="form-input" type="date" id="cpStartDate">
            </div>
            <div class="form-group">
                <label class="form-label">End Date</label>
                <input class="form-input" type="date" id="cpEndDate">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Rights & Responsibilities Signed</label>
                <select class="form-select" id="cpRights"><option value="true">Yes</option><option value="false">No</option></select>
            </div>
            <div class="form-group">
                <label class="form-label">Allergies Documented</label>
                <select class="form-select" id="cpAllergies"><option value="true">Yes</option><option value="false">No</option></select>
            </div>
        </div>
    `;

    modal.open('New Care Plan', html, () => {
        const goals = document.getElementById('cpGoals').value.trim();
        const tasksRaw = document.getElementById('cpTasks').value.trim();
        if (!goals || !tasksRaw) {
            showToast('Please fill in goals and tasks', 'error');
            return;
        }

        const patientId = parseInt(document.getElementById('cpPatient').value);
        const patient = DataStore.patients.find(p => p.id === patientId);

        const newCP = {
            id: generateId(),
            patientId,
            patient: patient.name,
            type: document.getElementById('cpType').value,
            tasks: tasksRaw.split('\n').filter(t => t.trim()),
            goals,
            startDate: document.getElementById('cpStartDate').value,
            endDate: document.getElementById('cpEndDate').value,
            status: 'active',
            rightsDocumented: document.getElementById('cpRights').value === 'true',
            dnrOnFile: false,
            allergiesDocumented: document.getElementById('cpAllergies').value === 'true'
        };

        DataStore.carePlans.push(newCP);
        renderCarePlans();
        showToast(`Care plan created for ${patient.name}`);
    });
}

function openAddAuthModal() {
    const html = `
        <div class="form-group">
            <label class="form-label">Patient</label>
            <select class="form-select" id="authPatient">
                ${DataStore.patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Service Type</label>
            <select class="form-select" id="authServiceType">
                <option value="Skilled Nursing">Skilled Nursing</option>
                <option value="Home Health Aide">Home Health Aide</option>
                <option value="Physical Therapy">Physical Therapy</option>
                <option value="Occupational Therapy">Occupational Therapy</option>
                <option value="Respiratory Therapy">Respiratory Therapy</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Authorised Hours</label>
            <input class="form-input" type="number" id="authHours" placeholder="e.g. 120" min="1">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Valid From</label>
                <input class="form-input" type="date" id="authFrom">
            </div>
            <div class="form-group">
                <label class="form-label">Valid To</label>
                <input class="form-input" type="date" id="authTo">
            </div>
        </div>
    `;

    modal.open('Add Authorisation', html, () => {
        const patientId = parseInt(document.getElementById('authPatient').value);
        const patient = DataStore.patients.find(p => p.id === patientId);
        const hours = parseInt(document.getElementById('authHours').value);

        if (!hours) {
            showToast('Please enter authorised hours', 'error');
            return;
        }

        const newAuth = {
            id: `AUTH-${new Date().getFullYear()}-${String(DataStore.authorisations.length + 1).padStart(3, '0')}`,
            patientId,
            patient: patient.name,
            serviceType: document.getElementById('authServiceType').value,
            authHours: hours,
            usedHours: 0,
            validFrom: document.getElementById('authFrom').value,
            validTo: document.getElementById('authTo').value,
            status: 'valid'
        };

        DataStore.authorisations.push(newAuth);
        // Update patient auth status
        patient.authStatus = 'valid';
        renderAuthorisations();
        showToast(`Authorisation ${newAuth.id} created for ${patient.name}`);
    });
}

function openNewInvoiceModal() {
    const formatLabels = { ub04: 'UB-04', cms1500: 'CMS-1500', private: 'Private Pay' };
    const html = `
        <div class="form-group">
            <label class="form-label">Patient</label>
            <select class="form-select" id="invPatient">
                ${DataStore.patients.filter(p => p.status === 'active').map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Service Date</label>
                <input class="form-input" type="date" id="invDate">
            </div>
            <div class="form-group">
                <label class="form-label">Amount (£)</label>
                <input class="form-input" type="number" id="invAmount" step="0.01" placeholder="0.00">
            </div>
        </div>
        <div class="form-group">
            <label class="form-label">Billing Format</label>
            <select class="form-select" id="invFormat">
                <option value="ub04">UB-04</option>
                <option value="cms1500">CMS-1500</option>
                <option value="private">Private Pay</option>
            </select>
        </div>
    `;

    modal.open('New Invoice', html, () => {
        const patientId = parseInt(document.getElementById('invPatient').value);
        const patient = DataStore.patients.find(p => p.id === patientId);
        const amount = parseFloat(document.getElementById('invAmount').value);

        if (!amount) {
            showToast('Please enter an amount', 'error');
            return;
        }

        const newInv = {
            id: `INV-${new Date().getFullYear()}-${String(DataStore.billing.length + 142).padStart(4, '0')}`,
            patientId,
            patient: patient.name,
            serviceDate: document.getElementById('invDate').value,
            amount,
            format: document.getElementById('invFormat').value,
            status: 'submitted'
        };

        DataStore.billing.unshift(newInv);
        renderBilling();
        showToast(`Invoice ${newInv.id} created`);
    });
}

// View detail functions
function viewPatient(id) {
    const p = DataStore.patients.find(pt => pt.id === id);
    if (!p) return;
    const auth = DataStore.authorisations.find(a => a.patientId === id && a.status !== 'expired');
    const html = `
        <div class="form-group"><label class="form-label">Name</label><p style="color:var(--text-primary);font-size:0.875rem">${p.name}</p></div>
        <div class="form-row">
            <div class="form-group"><label class="form-label">Date of Birth</label><p style="color:var(--text-secondary);font-size:0.8125rem">${formatDate(p.dob)}</p></div>
            <div class="form-group"><label class="form-label">Status</label><p><span class="schedule-status status--${p.status}">${p.status}</span></p></div>
        </div>
        <div class="form-group"><label class="form-label">Primary Diagnosis</label><p style="color:var(--text-secondary);font-size:0.8125rem">${p.diagnosis}</p></div>
        <div class="form-group"><label class="form-label">Assigned Caregiver</label><p style="color:var(--text-secondary);font-size:0.8125rem">${p.caregiver}</p></div>
        <div class="form-row">
            <div class="form-group"><label class="form-label">Allergies</label><p style="color:${p.allergies !== 'None' ? 'var(--accent-amber)' : 'var(--text-secondary)'};font-size:0.8125rem;font-weight:${p.allergies !== 'None' ? '600' : '400'}">${p.allergies}</p></div>
            <div class="form-group"><label class="form-label">DNR on File</label><p style="color:var(--text-secondary);font-size:0.8125rem">${p.dnr ? 'Yes' : 'No'}</p></div>
        </div>
        ${auth ? `
        <div style="background:rgba(110,231,183,0.04);border:1px solid rgba(110,231,183,0.12);border-radius:8px;padding:0.75rem 1rem;margin-top:0.5rem;">
            <p style="font-size:0.75rem;color:var(--accent-green);font-weight:500;">Current Authorisation: ${auth.id}</p>
            <p style="font-size:0.6875rem;color:var(--text-muted);margin-top:0.25rem;">${auth.serviceType} · ${auth.authHours}h authorised · ${auth.usedHours}h used · Valid until ${formatDate(auth.validTo)}</p>
        </div>` : `
        <div style="background:rgba(248,113,113,0.04);border:1px solid rgba(248,113,113,0.12);border-radius:8px;padding:0.75rem 1rem;margin-top:0.5rem;">
            <p style="font-size:0.75rem;color:var(--accent-red);font-weight:500;">⚠ No Active Authorisation</p>
        </div>`}
    `;
    modal.open('Patient Details', html, () => modal.close());
    document.getElementById('modalSave').textContent = 'Close';
}

function viewCaregiver(id) {
    const c = DataStore.caregivers.find(cg => cg.id === id);
    if (!c) return;
    const docs = DataStore.complianceRecords.filter(r => r.caregiverId === id);
    const html = `
        <div class="form-group"><label class="form-label">Name</label><p style="color:var(--text-primary);font-size:0.875rem">${c.name}</p></div>
        <div class="form-row">
            <div class="form-group"><label class="form-label">Role</label><p style="color:var(--text-secondary);font-size:0.8125rem">${c.role}</p></div>
            <div class="form-group"><label class="form-label">Certification</label><p style="color:var(--text-secondary);font-size:0.8125rem">${c.certification}</p></div>
        </div>
        <div class="form-row">
            <div class="form-group"><label class="form-label">Compliance</label><p><span class="schedule-status status--${c.compliance}">${c.compliance}</span></p></div>
            <div class="form-group"><label class="form-label">Assigned Patients</label><p style="color:var(--text-secondary);font-size:0.8125rem">${c.assignedPatients}</p></div>
        </div>
        <div class="form-group">
            <label class="form-label">Document Status</label>
            <div style="display:flex;flex-direction:column;gap:0.35rem;margin-top:0.25rem;">
                ${docs.map(d => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.35rem 0;border-bottom:1px solid var(--border-color);">
                        <span style="font-size:0.8125rem;color:var(--text-secondary)">${d.document}</span>
                        <span class="schedule-status status--${d.status}">${d.status} · ${formatDate(d.expiry)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    modal.open('Caregiver Details', html, () => modal.close());
    document.getElementById('modalSave').textContent = 'Close';
}

function viewCarePlan(id) {
    const cp = DataStore.carePlans.find(c => c.id === id);
    if (!cp) return;
    const patient = DataStore.patients.find(p => p.id === cp.patientId);
    const html = `
        <div class="form-group"><label class="form-label">Patient</label><p style="color:var(--text-primary);font-size:0.875rem">${cp.patient}</p></div>
        <div class="form-group"><label class="form-label">Service Type</label><p style="color:var(--text-secondary);font-size:0.8125rem">${cp.type}</p></div>
        <div class="form-group"><label class="form-label">Goals</label><p style="color:var(--text-secondary);font-size:0.8125rem;line-height:1.6">${cp.goals}</p></div>
        <div class="form-group">
            <label class="form-label">Service Tasks</label>
            <ul class="careplan-tasks" style="margin-top:0.25rem">
                ${cp.tasks.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
        <div class="form-row">
            <div class="form-group"><label class="form-label">Period</label><p style="color:var(--text-secondary);font-size:0.8125rem">${formatDate(cp.startDate)} — ${formatDate(cp.endDate)}</p></div>
            <div class="form-group"><label class="form-label">Status</label><p><span class="schedule-status status--${cp.status}">${cp.status}</span></p></div>
        </div>
        ${patient ? `
        <div style="background:rgba(251,191,36,0.04);border:1px solid rgba(251,191,36,0.12);border-radius:8px;padding:0.75rem 1rem;margin-top:0.5rem;">
            <p style="font-size:0.75rem;color:var(--accent-amber);font-weight:500;">📋 Client Home Folder</p>
            <p style="font-size:0.6875rem;color:var(--text-muted);margin-top:0.25rem;">Allergies: <strong>${patient.allergies}</strong> · DNR: <strong>${patient.dnr ? 'Yes' : 'No'}</strong></p>
        </div>` : ''}
    `;
    modal.open('Care Plan Details', html, () => modal.close());
    document.getElementById('modalSave').textContent = 'Close';
}

function editPatient(id) {
    const p = DataStore.patients.find(pt => pt.id === id);
    if (!p) return;
    const nameParts = p.name.split(' ');
    const html = `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">First Name</label>
                <input class="form-input" id="editPatientFirst" value="${nameParts[0]}">
            </div>
            <div class="form-group">
                <label class="form-label">Last Name</label>
                <input class="form-input" id="editPatientLast" value="${nameParts.slice(1).join(' ')}">
            </div>
        </div>
        <div class="form-group">
            <label class="form-label">Primary Diagnosis</label>
            <input class="form-input" id="editPatientDiag" value="${p.diagnosis}">
        </div>
        <div class="form-group">
            <label class="form-label">Assigned Caregiver</label>
            <select class="form-select" id="editPatientCG">
                ${DataStore.caregivers.filter(c => c.status === 'active').map(c => `<option value="${c.name}" ${c.name === p.caregiver ? 'selected' : ''}>${c.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Allergies</label>
            <input class="form-input" id="editPatientAllergies" value="${p.allergies}">
        </div>
        <div class="form-group">
            <label class="form-label">Status</label>
            <select class="form-select" id="editPatientStatus">
                <option value="active" ${p.status === 'active' ? 'selected' : ''}>Active</option>
                <option value="inactive" ${p.status === 'inactive' ? 'selected' : ''}>Inactive</option>
            </select>
        </div>
    `;

    modal.open('Edit Patient', html, () => {
        p.name = `${document.getElementById('editPatientFirst').value} ${document.getElementById('editPatientLast').value}`;
        p.diagnosis = document.getElementById('editPatientDiag').value;
        p.caregiver = document.getElementById('editPatientCG').value;
        p.allergies = document.getElementById('editPatientAllergies').value;
        p.status = document.getElementById('editPatientStatus').value;
        renderPatients();
        showToast(`Patient ${p.name} updated`);
    });
}

// ========================
// EVENT LISTENERS
// ========================

document.addEventListener('DOMContentLoaded', () => {
    // Init modal
    modal.init();

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Schedule nav
    document.getElementById('schedPrevWeek').addEventListener('click', () => {
        scheduleWeekOffset--;
        renderSchedule();
    });

    document.getElementById('schedNextWeek').addEventListener('click', () => {
        scheduleWeekOffset++;
        renderSchedule();
    });

    // Action buttons
    document.getElementById('addPatientBtn').addEventListener('click', openAddPatientModal);
    document.getElementById('addCaregiverBtn').addEventListener('click', openAddCaregiverModal);
    document.getElementById('addVisitBtn').addEventListener('click', openScheduleVisitModal);
    document.getElementById('addCarePlanBtn').addEventListener('click', openNewCarePlanModal);
    document.getElementById('newDocBtn').addEventListener('click', openNewDocModal);
    document.getElementById('addAuthBtn').addEventListener('click', openAddAuthModal);
    document.getElementById('newInvoiceBtn').addEventListener('click', openNewInvoiceModal);

    // Global search
    document.getElementById('globalSearch').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) return;

        const results = [];
        DataStore.patients.forEach(p => {
            if (p.name.toLowerCase().includes(query)) results.push({ type: 'Patient', name: p.name, page: 'patients' });
        });
        DataStore.caregivers.forEach(c => {
            if (c.name.toLowerCase().includes(query)) results.push({ type: 'Caregiver', name: c.name, page: 'caregivers' });
        });

        if (results.length === 1) {
            navigateTo(results[0].page);
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.close();
            document.getElementById('sidebar').classList.remove('open');
        }
    });

    // Initial render
    renderDashboard();
});

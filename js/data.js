// ==========================================
// DIGITAL WELLNESS PLAN - DATA
// ==========================================

// MOTIVATIONAL MESSAGES
// These rotate daily based on the date
const MOTIVATIONAL_MESSAGES = [
    "Small steps create lasting change. Every moment you invest in your wellbeing matters.",
    "You're taking control of your digital life - that takes courage and awareness.",
    "Progress isn't linear. Be patient with yourself as you build healthier tech habits.",
    "Your wellbeing is worth prioritizing, even when it feels like everything else is urgent.",
    "Each intentional choice about technology use is a victory worth celebrating.",
    // Add more messages here - currently 5, can expand to 150+
];

// WELLBEING CARDS
// Each card has: id, section, icon, symptom, description, treatment, strategies
const WELLBEING_CARDS = [
    // SAMPLE CARD FORMAT - Screen Time & Boundaries
    {
        id: 'screen-time-1',
        section: 'Screen Time & Boundaries',
        icon: '📱',
        symptom: 'Always-On Exhaustion',
        description: 'You feel constantly connected, checking devices from wake to sleep. The line between work and rest has completely blurred.',
        treatment: 'Create Sacred Offline Time',
        strategies: [
            'Designate one hour in the morning as "phone-free" - use this time for breakfast, movement, or reading',
            'Set a daily "digital sunset" time (e.g., 8 PM) when work devices go into another room',
            'Use airplane mode strategically during focus periods or personal time',
            'Create physical distance: charge your phone away from your bed and workspace',
            'Replace one screen habit with an offline alternative (e.g., paper journal instead of notes app)'
        ]
    },
    
    // SAMPLE CARD FORMAT - Communication Stress
    {
        id: 'comm-1',
        section: 'Communication Stress',
        icon: '📧',
        symptom: 'Inbox Avalanche Anxiety',
        description: 'Your inbox has hundreds or thousands of unread emails. The thought of checking it creates instant stress. You avoid it, which makes it worse.',
        treatment: 'Inbox Reset and Maintenance System',
        strategies: [
            'Declare "email bankruptcy": Archive everything older than 2 weeks and start fresh',
            'Use filters and folders to auto-sort incoming mail by priority',
            'Unsubscribe ruthlessly - if you haven't read it in 3 months, you won't',
            'Process email in batches (2-3 times daily) rather than keeping it open constantly',
            'Use the 2-minute rule: If it takes under 2 minutes, do it immediately; otherwise, schedule it'
        ]
    },
    
    // MORE CARDS WILL BE ADDED HERE
    // We'll pause here for you to review the format before adding all cards
];

// SECTION LIST (for filtering)
const SECTIONS = [
    'Screen Time & Boundaries',
    'Communication Stress',
    'Information Overload',
    'Work-Life Balance',
    'Sleep & Evening Use',
    'Focus & Productivity',
    'Social Media',
    'Physical Health'
];

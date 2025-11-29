// ==================================
// DIGITAL WELLNESS PLAN - DATA
// 30 Cards + 40 Messages
// ==================================

// MOTIVATIONAL MESSAGES (40 total)
const MOTIVATIONAL_MESSAGES = [
    // Motivation (15)
    "Small steps create lasting change. Every moment you invest in your wellbeing matters.",
    "You're taking control of your digital life - that takes courage and awareness.",
    "Progress isn't linear. Be patient with yourself as you build healthier tech habits.",
    "Your wellbeing is worth prioritizing, even when it feels like everything else is urgent.",
    "Each intentional choice about technology use is a victory worth celebrating.",
    "You're learning to use technology on your terms - that's powerful.",
    "Remember: You're not failing at technology; you're learning to set healthy boundaries.",
    "Digital wellbeing isn't about perfection, it's about awareness and small adjustments.",
    "You deserve to feel good about your relationship with technology.",
    "Taking time to reflect on your tech use shows self-respect and wisdom.",
    "Every day is a new opportunity to create healthier digital habits.",
    "You're developing skills that will serve you for years to come.",
    "Noticing when tech doesn't serve you is the first step to meaningful change.",
    "Your attention is valuable - it's okay to be selective about where you spend it.",
    "Building better tech habits is an act of self-care, not restriction.",
    
    // Inspiration (15)
    "Almost everything will work again if you unplug it for a few minutes, including you. - Anne Lamott",
    "Your attention is the most precious resource you have - guard it wisely.",
    "Real connection happens when we're fully present, not perpetually distracted.",
    "The most important notifications are the ones from your own body and mind.",
    "Technology is a tool, not a master. You get to decide how you use it.",
    "Boredom isn't something to flee - it's where creativity begins.",
    "The best moments in life rarely come with a notification sound.",
    "Your worth isn't measured in likes, responses, or productivity metrics.",
    "Sometimes the most productive thing you can do is nothing at all.",
    "Silence and solitude are gifts, not voids to fill with content.",
    "You are not your inbox, your to-do list, or your screen time stats.",
    "Deep work requires protected time and intentional disconnection.",
    "The pause between stimulus and response is where your power lives.",
    "Being unreachable sometimes is necessary for reaching your potential.",
    "Your mind needs white space the way a page needs margins.",
    
    // Practical Tips (10)
    "Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
    "Put your phone in another room while you sleep - your rest quality matters.",
    "Turn off non-essential notifications. You can check on your terms.",
    "Create device-free zones in your home - perhaps the bedroom or dining table.",
    "Use website blockers during focus time. Remove temptation, protect your attention.",
    "Schedule specific times to check email rather than keeping it open constantly.",
    "Keep your phone on grayscale mode to reduce its visual appeal.",
    "Set a firm screens off time each evening to protect your sleep.",
    "Delete apps that don't add value to your life - be ruthless about this.",
    "Use do not disturb mode as your default, not your exception."
];

// WELLBEING CARDS (30 total - about 4 per section)
const WELLBEING_CARDS = [
    // SCREEN TIME & BOUNDARIES (4 cards)
    {
        id: 'screen-time-1',
        section: 'Screen Time & Boundaries',
        icon: '📱',
        symptom: 'Always-On Exhaustion',
        description: 'You feel constantly connected, checking devices from wake to sleep. The line between work and rest has completely blurred.',
        treatment: 'Create Sacred Offline Time',
        strategies: [
            'Designate one hour in the morning as phone-free - use this time for breakfast, movement, or reading',
            'Set a daily digital sunset time (e.g., 8 PM) when work devices go into another room',
            'Use airplane mode strategically during focus periods or personal time',
            'Create physical distance: charge your phone away from your bed and workspace'
        ]
    },
    {
        id: 'screen-time-2',
        section: 'Screen Time & Boundaries',
        icon: '🌙',
        symptom: 'Late-Night Scrolling Spiral',
        description: 'You intend to wind down but find yourself scrolling for hours, feeling increasingly wired despite being tired. Sleep suffers, and you wake up groggy.',
        treatment: 'Build a Screen-Free Evening Routine',
        strategies: [
            'Set a firm screens off alarm 60-90 minutes before your target bedtime',
            'Create a replacement evening ritual: reading physical books, gentle stretching, journaling, or listening to music',
            'Keep your phone charging in another room overnight',
            'If you need an alarm, use a dedicated alarm clock instead of your phone'
        ]
    },
    {
        id: 'screen-time-3',
        section: 'Screen Time & Boundaries',
        icon: '🔄',
        symptom: 'Compulsive Phone-Checking',
        description: 'You reach for your phone dozens of times without conscious thought - during conversations, red lights, even while walking. It is automatic.',
        treatment: 'Add Friction to Automatic Habits',
        strategies: [
            'Move tempting apps off your home screen into folders that require multiple taps',
            'Turn off all non-essential notifications (yes, all of them)',
            'Use grayscale mode to make your phone less visually stimulating',
            'Practice the 5-second rule: pause for 5 seconds before unlocking your phone and ask what you are looking for'
        ]
    },
    {
        id: 'screen-time-4',
        section: 'Screen Time & Boundaries',
        icon: '💼',
        symptom: 'Work Never Ends',
        description: 'You check work emails in the evening, respond to messages on weekends, and feel guilty when you are not available. Boundaries feel impossible in teaching or support roles.',
        treatment: 'Establish Clear Work-Life Tech Boundaries',
        strategies: [
            'Set specific office hours when you are available and communicate them clearly',
            'Use separate browser profiles or device user accounts for work vs. personal',
            'Create an auto-responder for after-hours emails that sets expectations',
            'Physically separate work devices when off duty - put them in a drawer or another room'
        ]
    },
    
    // COMMUNICATION STRESS (4 cards)
    {
        id: 'comm-1',
        section: 'Communication Stress',
        icon: '📧',
        symptom: 'Inbox Avalanche Anxiety',
        description: 'Your inbox has hundreds or thousands of unread emails. The thought of checking it creates instant stress. You avoid it, which makes it worse.',
        treatment: 'Inbox Reset and Maintenance System',
        strategies: [
            'Declare email bankruptcy: Archive everything older than 2 weeks and start fresh',
            'Use filters and folders to auto-sort incoming mail by priority',
            'Unsubscribe ruthlessly - if you have not read it in 3 months, you will not',
            'Process email in batches (2-3 times daily) rather than keeping it open constantly'
        ]
    },
    {
        id: 'comm-2',
        section: 'Communication Stress',
        icon: '⚡',
        symptom: 'Instant Response Pressure',
        description: 'You feel pressured to respond immediately to every message. Colleagues, students, or family expect instant replies, and you have trained them to expect this.',
        treatment: 'Set and Communicate Response Boundaries',
        strategies: [
            'Establish and share your typical response timeframes (e.g., I check emails twice daily)',
            'Use auto-responders or email signatures that set expectations',
            'Batch your responses - respond to messages at specific times, not continuously',
            'Distinguish between urgent and important - most things are neither'
        ]
    },
    {
        id: 'comm-3',
        section: 'Communication Stress',
        icon: '💥',
        symptom: 'Group Chat Overwhelm',
        description: 'You are in dozens of group chats that ping constantly. Keeping up feels impossible, but fear of missing something important keeps you checking.',
        treatment: 'Curate and Control Group Communications',
        strategies: [
            'Mute notifications for all but essential group chats',
            'Leave groups that do not serve you anymore - it is okay to opt out',
            'Check group chats at designated times rather than when notified',
            'Use status messages: Checking messages once daily or In focused work mode'
        ]
    },
    {
        id: 'comm-4',
        section: 'Communication Stress',
        icon: '📱',
        symptom: 'Notification-Driven Day',
        description: 'Your entire day is reactive - you respond to each notification as it comes. You never enter deep work because you are constantly interrupted.',
        treatment: 'Become Proactive, Not Reactive',
        strategies: [
            'Turn off all notifications except true emergencies (if those even exist)',
            'Block specific time periods for communication (e.g., 10 AM and 3 PM for email)',
            'Use do not disturb as your default state during work and personal time',
            'Start your day with YOUR priority, not your inbox demands'
        ]
    },
    
    // INFORMATION OVERLOAD (4 cards)
    {
        id: 'info-1',
        section: 'Information Overload',
        icon: '📰',
        symptom: 'News Cycle Exhaustion',
        description: 'You compulsively check news throughout the day. You feel anxious and powerless, but cannot stop refreshing. Every headline feels urgent.',
        treatment: 'Curate Your Information Diet',
        strategies: [
            'Limit news checking to 1-2 specific times daily (e.g., morning and evening)',
            'Unfollow news accounts on social media - go directly to sources when YOU choose',
            'Choose 2-3 quality news sources; ignore the endless reactive commentary',
            'Ask yourself: Can I do anything about this right now? If no, limit your exposure'
        ]
    },
    {
        id: 'info-2',
        section: 'Information Overload',
        icon: '📸',
        symptom: 'Comparison Spiral',
        description: 'You scroll through others highlight reels and feel inadequate. Everyone else seems more successful, happy, and put-together. Your mood drops after social media sessions.',
        treatment: 'Reality-Check Social Media',
        strategies: [
            'Unfollow or mute accounts that consistently make you feel worse about yourself',
            'Remember: You are comparing your inside to their outside, their curated moments to your entire reality',
            'Set time limits on social media apps - use them intentionally, not habitually',
            'Take extended breaks (week or month) to reset your perspective'
        ]
    },
    {
        id: 'info-3',
        section: 'Information Overload',
        icon: '📚',
        symptom: 'Content Backlog Guilt',
        description: 'You have hundreds of saved articles, podcasts, and videos you should consume. The list grows faster than you can consume it. You feel guilty about the backlog.',
        treatment: 'Embrace Selective Consumption',
        strategies: [
            'Declare content bankruptcy: Delete or archive everything older than 3 months',
            'Accept that you cannot consume everything - strategic ignorance is a skill',
            'Use the save less, consume now approach: If it is not worth engaging with immediately, it probably is not worth saving',
            'Unsubscribe from content sources you never actually engage with'
        ]
    },
    {
        id: 'info-4',
        section: 'Information Overload',
        icon: '🐇',
        symptom: 'Wikipedia/YouTube Rabbit Holes',
        description: 'You start researching one thing and emerge three hours later, 47 tabs deep, having learned about medieval trebuchets when you were looking up a recipe.',
        treatment: 'Contain Curiosity Spirals',
        strategies: [
            'Set a timer when you start online research - give yourself 15-20 minutes',
            'Use the one tab rule for focused tasks - close tabs as you finish with them',
            'Save interesting tangents to a look at later list instead of following them immediately',
            'Notice when you are genuinely learning vs. procrastinating through research'
        ]
    },
    
    // WORK-LIFE BALANCE (4 cards)
    {
        id: 'work-1',
        section: 'Work-Life Balance',
        icon: '💼',
        symptom: 'Compulsive After-Hours Email',
        description: 'You check and respond to work emails in the evenings and weekends. It feels like if you do not, you will fall behind or miss something critical.',
        treatment: 'Protect Personal Time Fiercely',
        strategies: [
            'Remove work email from your phone, or delete the app after work hours',
            'Set clear boundaries: I respond to non-urgent emails during work hours only',
            'Use email scheduling to draft responses in the evening but send them during work hours',
            'Create separate devices or profiles for work vs. personal'
        ]
    },
    {
        id: 'work-2',
        section: 'Work-Life Balance',
        icon: '💭',
        symptom: 'Never Mentally Clocking Out',
        description: 'Even when you are not working, you are thinking about work. Your mind is always partly in lesson planning, student concerns, or admin tasks.',
        treatment: 'Create Mental Transition Rituals',
        strategies: [
            'Develop an end-of-day ritual that signals work is done (close laptop, specific music, change clothes)',
            'Write down tomorrow priorities before finishing - this helps your brain let go',
            'Physical transition: walk, stretch, change location after work ends',
            'Practice presence: When with family/friends, notice when work thoughts intrude and gently redirect'
        ]
    },
    {
        id: 'work-3',
        section: 'Work-Life Balance',
        icon: '📅',
        symptom: 'Sunday Night Work Spiral',
        description: 'Your Sunday evenings are consumed by work prep for the week ahead. Weekend relaxation is undermined by looming Monday anxiety.',
        treatment: 'Front-Load Week Preparation',
        strategies: [
            'Do Friday afternoon planning for the following week before you leave',
            'Batch weekly prep during work hours, not personal time',
            'Accept good enough for Monday - perfection is not required',
            'Set a hard stop time for any Sunday prep (e.g., not after 4 PM)'
        ]
    },
    {
        id: 'work-4',
        section: 'Work-Life Balance',
        icon: '🥪',
        symptom: 'Desk Lunch Habit',
        description: 'You eat lunch at your desk while working or scrolling. You cannot remember the last time you took a real break during the day.',
        treatment: 'Reclaim Your Lunch Break',
        strategies: [
            'Leave your workspace during lunch - different room, outside, anywhere else',
            'No screens during lunch (or at least, no work screens)',
            'Use lunch for genuine rest: walk, read, socialize, sit in silence',
            'Treat lunch as non-negotiable protected time, like a meeting with yourself'
        ]
    },
    
    // SLEEP & EVENING USE (3 cards)
    {
        id: 'sleep-1',
        section: 'Sleep & Evening Use',
        icon: '🛏️',
        symptom: 'One More Scroll Syndrome',
        description: 'You get into bed intending to sleep, but spend 30-90 minutes scrolling through social media, news, or videos. You cannot seem to put the phone down.',
        treatment: 'Create a Phone-Free Bedroom',
        strategies: [
            'Charge your phone in a different room overnight - this is the single most effective change',
            'Buy a dedicated alarm clock if that is your excuse for keeping your phone nearby',
            'Remove apps you tend to scroll late at night from your phone entirely',
            'Replace phone scrolling with a physical book, journal, or gentle music'
        ]
    },
    {
        id: 'sleep-2',
        section: 'Sleep & Evening Use',
        icon: '💡',
        symptom: 'Screen-Stimulated Insomnia',
        description: 'You use screens right up until bedtime. Your mind feels wired when you try to sleep. You lie awake with thoughts racing.',
        treatment: 'Implement a Digital Curfew',
        strategies: [
            'Set a screens off time 60-90 minutes before bed - set an alarm as a reminder',
            'Replace evening screen time with calming activities: reading, stretching, conversation, journaling',
            'Dim the lights in your home in the evening to signal to your body that sleep is approaching',
            'If you must use screens late, use night mode and reduce brightness significantly'
        ]
    },
    {
        id: 'sleep-3',
        section: 'Sleep & Evening Use',
        icon: '📺',
        symptom: 'Evening Content Overstimulation',
        description: 'You watch intense shows, read upsetting news, or engage with provocative content before bed. Your mind races when you try to sleep.',
        treatment: 'Curate Evening Content Carefully',
        strategies: [
            'Avoid news, work emails, or intense content for 2 hours before bed',
            'Choose calming content in the evening: lighter shows, fiction, comedy, nature content',
            'If something upsets you in the evening, talk or journal about it rather than stewing',
            'Notice how different types of content affect your ability to sleep - and adjust accordingly'
        ]
    },
    
    // FOCUS & PRODUCTIVITY (4 cards)
    {
        id: 'focus-1',
        section: 'Focus & Productivity',
        icon: '🔄',
        symptom: 'Constant Task Switching',
        description: 'You jump between tasks constantly, checking notifications, responding to messages, never completing anything deeply. You feel scattered and ineffective.',
        treatment: 'Practice Single-Tasking Deep Work',
        strategies: [
            'Block specific time periods for single tasks - treat these like unmovable meetings',
            'Turn off all notifications during focus periods',
            'Use website/app blockers to remove temptation during deep work',
            'Start small: 25-minute focused sessions (Pomodoro technique), then build up'
        ]
    },
    {
        id: 'focus-2',
        section: 'Focus & Productivity',
        icon: '🗂️',
        symptom: 'Tab Overload',
        description: 'You have 30+ tabs open at all times. Your browser is overwhelming. You cannot find what you need and constantly feel mentally cluttered.',
        treatment: 'Implement Tab Hygiene',
        strategies: [
            'End each work session by closing all tabs - bookmark anything you need for later',
            'Use the one tab rule for focused tasks',
            'Create bookmark folders for different projects instead of keeping tabs open',
            'Accept that if you have not looked at a tab in 3 days, you do not need it open'
        ]
    },
    {
        id: 'focus-3',
        section: 'Focus & Productivity',
        icon: '🌊',
        symptom: 'Flow State Impossible',
        description: 'You cannot get into deep focus. Every time you start to concentrate, a notification pulls you out. You have not experienced flow in months.',
        treatment: 'Protect Focus Time Ruthlessly',
        strategies: [
            'Schedule 2-3 hour blocks of protected focus time - put it in your calendar',
            'Turn phone on airplane mode or do not disturb during focus blocks',
            'Use website blockers to prevent yourself from checking distracting sites',
            'Communicate your focus time to colleagues: I am unreachable during my focus blocks'
        ]
    },
    {
        id: 'focus-4',
        section: 'Focus & Productivity',
        icon: '🏃',
        symptom: 'Busy but Not Productive',
        description: 'You are constantly doing things - responding to emails, attending meetings, checking systems - but never accomplishing your most important work. Days end with exhaustion but nothing significant completed.',
        treatment: 'Prioritize Deep Over Shallow Work',
        strategies: [
            'Identify your top 3 priorities each week - protect time for these first',
            'Do your most important work during your peak energy hours (usually morning)',
            'Batch shallow work (email, admin tasks) into specific time blocks',
            'Learn to say no to meetings and requests that do not serve your core priorities'
        ]
    },
    
    // SOCIAL MEDIA (3 cards)
    {
        id: 'social-1',
        section: 'Social Media',
        icon: '📱',
        symptom: 'Automatic App Opening',
        description: 'You open social media apps without thinking—during conversations, waiting, walking between rooms. It is completely automatic and mindless.',
        treatment: 'Add Friction to Automatic Habits',
        strategies: [
            'Delete social media apps from your phone - access only via browser when you consciously choose',
            'Move apps to hard-to-reach folders that require multiple taps',
            'Set app time limits that lock you out after your daily budget',
            'Use the 5-second pause: Before opening an app, pause and ask What am I looking for?'
        ]
    },
    {
        id: 'social-2',
        section: 'Social Media',
        icon: '❤️',
        symptom: 'Likes and Metrics Anxiety',
        description: 'You check how many likes or reactions your posts get repeatedly. Your mood rises and falls with social media metrics. You feel rejected when posts do not perform well.',
        treatment: 'Decouple Self-Worth from Metrics',
        strategies: [
            'Turn off all notification badges and alerts for social media',
            'Hide like counts and view metrics using browser extensions or app settings',
            'Post without checking responses for 24 hours - break the checking loop',
            'Remind yourself: Online metrics do not measure your value or impact'
        ]
    },
    {
        id: 'social-3',
        section: 'Social Media',
        icon: '😰',
        symptom: 'FOMO Spiral',
        description: 'You feel anxious about missing out on events, conversations, or trends. You scroll constantly to stay in the loop but feel increasingly disconnected and inadequate.',
        treatment: 'Reality-Check Your FOMO',
        strategies: [
            'Remember: Social media shows highlights, not reality - everyone experiences more mundane life than they post',
            'Take deliberate breaks from social media (start with one day per week)',
            'Mute or unfollow accounts that consistently trigger FOMO feelings',
            'Focus on real connections: Call one friend instead of scrolling through hundreds of acquaintances'
        ]
    },
    
    // PHYSICAL HEALTH (4 cards)
    {
        id: 'physical-1',
        section: 'Physical Health',
        icon: '🤕',
        symptom: 'Neck and Back Pain',
        description: 'You have persistent neck, shoulder, or back pain from hunching over devices. Your posture has noticeably worsened. Pain interrupts your work and life.',
        treatment: 'Improve Device Ergonomics',
        strategies: [
            'Raise your screen to eye level - use a laptop stand or stack of books',
            'Keep your screen an arm length away',
            'Sit with your back supported, feet flat on the floor, arms at 90 degrees',
            'Take movement breaks every 30-45 minutes - even just standing and stretching helps'
        ]
    },
    {
        id: 'physical-2',
        section: 'Physical Health',
        icon: '👁️',
        symptom: 'Digital Eye Strain',
        description: 'Your eyes feel tired, dry, or irritated after screen use. You have headaches, blurred vision, or difficulty focusing. You squint constantly.',
        treatment: 'Protect Your Eye Health',
        strategies: [
            'Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds',
            'Reduce screen brightness to match your environment',
            'Increase text size so you are not squinting',
            'Use artificial tears or blink consciously - screen use reduces blink rate by 60%'
        ]
    },
    {
        id: 'physical-3',
        section: 'Physical Health',
        icon: '🪑',
        symptom: 'All-Day Sitting',
        description: 'You sit for 8-12 hours daily with minimal movement. Your body feels stiff and achy. You lack energy despite not doing anything physically demanding.',
        treatment: 'Integrate Movement Throughout the Day',
        strategies: [
            'Set a timer to stand and move every 30-45 minutes',
            'Take phone calls while walking',
            'Do simple exercises at your desk: shoulder rolls, neck stretches, seated twists',
            'Walk for 5-10 minutes after each meal'
        ]
    },
    {
        id: 'physical-4',
        section: 'Physical Health',
        icon: '😴',
        symptom: 'Screen-Induced Fatigue',
        description: 'You feel exhausted despite not being physically active. Hours of screen time leave you drained. You lack motivation or energy for activities you used to enjoy.',
        treatment: 'Rebuild Your Energy Through Movement and Nature',
        strategies: [
            'Take a 15-minute walk outside daily - daylight and movement restore energy',
            'Incorporate physical activity into your day, even in small amounts',
            'Spend time in nature when possible - it has measurable restorative effects',
            'Ensure you are taking real breaks, not just switching between screens'
        ]
    }
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

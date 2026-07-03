// ============================================================
// Music in Motion Ottawa -- Site Configuration
// ============================================================
// Non-technical editors: change text between the quotation
// marks ("...") below, then click "Commit changes" on GitHub.
// The website will update automatically within a few minutes.
// ============================================================

const SITE_CONFIG = {

  // -- Organisation info --
  orgName: "Music in Motion Ottawa",
  tagline: "Bringing music to the heart of our community",
  logoPath: "images/mim.jpg",

  // -- About section --
  aboutHeading: "Who We Are",
  aboutText: [
    "Music in Motion Ottawa is a federally registered not-for-profit organization operating locally in Ottawa. Our primary mission is to organize monthly concerts at two retirement homes: Timberwalk Retirement Community and Chartwell Stillwater Creek Retirement Residence. These concerts typically take place on the second Saturday and Sunday of each month, with occasional adjustments for other retirement home activities.",
    "We welcome both soloists and ensembles, encompassing a wide range of musical instruments. Our past performances have featured piano, violin, cello, flute, saxophone, voice, guitar, duets, jazz ensembles, and classical ensembles. We offer volunteer hours for all participants, covering not only performance time but also practice and travel.",
    "Music in Motion provides an opportunity for musically inclined youth to contribute to their community. Additionally, becoming a committee member offers a valuable chance to develop leadership skills through participation in monthly meetings, MCing, program creation, and social media posting on platforms like Instagram."
  ],

  // -- Upcoming events --
  // To add a new event, copy one of the objects below and
  // change the fields. To remove an event, delete the { ... } block.
  // Leave this empty during summer break -- the placeholder text below will show instead.
  events: [],

  // -- Videos --
  // Paste YouTube URLs here. Supported formats:
  //   "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  //   "https://youtu.be/XXXXXXXXXXX"
  videos: [
    // { title: "Spring 2026 Concert Highlights", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    // { title: "Holiday Concert 2025",           url: "https://youtu.be/XXXXXXXXXXX" },
  ],

  // -- Gallery --
  // To add a new photo, copy one of the objects below and
  // change the fields. Newest photos should go at the top.
  gallery: [
    { src: "images/Timberwalk-2026-04-12.jpg",                    caption: "Performance at Timberwalk Retirement Community" },
    { src: "images/ChartwellStillwaterCreek-2026-04-18.jpg",       caption: "Performance at Chartwell Stillwater Creek Retirement Residence" },
  ],

  // -- Past concert programs --
  // Programs are grouped by school year. To add a new school year,
  // copy one of the { year: "...", concerts: [...] } blocks below.
  // To add a new program within a year, copy a concert entry.
  // Newest school years and concerts should go at the top.
  programs: [
    {
      year: "2025–2026",
      concerts: [
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "June 27, 2026", file: "documents/2026-06-27 MiM Performance at Chartwell Stillwater Creek Retirement Residence.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "June 14, 2026", file: "documents/2026-06-14 MiM Performance at Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "May 17, 2026",  file: "documents/2026-05-17 MiM Performance at Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "April 18, 2026", file: "documents/2026-04-18 MiM Performance at Chartwell Stillwater Creek Retirement Residence.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "April 12, 2026", file: "documents/2026-04-12 MiM Performance at Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "March 8, 2026",  file: "documents/2026-03-08 MiM Performance at Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "December 14, 2025", file: "documents/2025-12-14 MiM Performance.pdf at Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "December 6, 2025",  file: "documents/2025-12-06 MiM Performance at Chartwell Stillwater Creek Retirement Residence.pdf" },
        { title: "Pathways to Independence Program",                                   date: "November 16, 2025", file: "documents/2025-11-16 Pathways to Independence Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "November 9, 2025",  file: "documents/2025-11-09 MiM Performance at Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "September 13, 2025", file: "documents/2025-09-13 MiM Performance at Timberwalk Retirement Community.pdf" },
      ]
    },
    {
      year: "2024–2025",
      concerts: [
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "June 14, 2025",     file: "documents/2025-06-14 Chartwell Stillwater Creek Retirement Residence.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "June 8, 2025",      file: "documents/2025-06-08 Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "May 4, 2025",       file: "documents/2025-05-04 Timberwalk Retirement Community.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "April 12, 2025",    file: "documents/2025-04-12 Chartwell Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "April 6, 2025",     file: "documents/2025-04-06 Timberwalk Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "March 9, 2025",     file: "documents/2025-03-09 Timberwalk Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "March 8, 2025",     file: "documents/2025-03-08 Chartwell Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "December 14, 2024", file: "documents/2024-12-14 Chartwell Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "November 16, 2024", file: "documents/2024-11-16 Timberwalk Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "November 9, 2024",  file: "documents/2024-11-09 Chartwell Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "October 19, 2024",  file: "documents/2024-10-19 Timberwalk Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "September 21, 2024", file: "documents/2024-09-21 Timberwalk Program.pdf" },
      ]
    },
    {
      year: "2023–2024",
      concerts: [
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "June 22, 2024",   file: "documents/2024-06-22 Timberwalk Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "June 1, 2024",    file: "documents/2024-06-01 Chartwell Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "May 25, 2024",    file: "documents/2024-05-25 Timberwalk Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "May 4, 2024",     file: "documents/2024-05-04 Chartwell Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "April 20, 2024",  file: "documents/2024-04-20 Timberwalk Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "March 23, 2024",  file: "documents/2024-03-23 Chartwell Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "February 10, 2024", file: "documents/2024-02-10 Chartwell Program.pdf" },
        { title: "MiM Performance at Timberwalk Retirement Community",                 date: "February 3, 2024",  file: "documents/2024-02-03 Timberwalk Program.pdf" },
        { title: "MiM Performance at Chartwell Stillwater Creek Retirement Residence", date: "January 13, 2024",  file: "documents/2024-01-13 Chartwell Program.pdf" },
      ]
    },
  ],

  // -- Committee members --
  // Members are grouped by section. Each group has a heading and a list of members.
  // Optional fields: photo, bio. Leave them empty ("") or omit if not ready.
  committee: [
    {
      section: "President",
      members: [
        { name: "Jasmin An", role: "", photo: "", bio: "" },
      ]
    },
    {
      section: "Adult Volunteers",
      members: [
        { name: "Hua Guo",   role: "Advisor",           photo: "", bio: "" },
        { name: "Min Zhang", role: "Operations Officer", photo: "", bio: "" },
      ]
    },
    {
      section: "Coordinators",
      members: [
        { name: "Carson Li", role: "Technology",    photo: "", bio: "" },
        { name: "Anne Wang", role: "Social Media",  photo: "", bio: "" },
        { name: "Boyan Hu",  role: "Program",       photo: "", bio: "" },
        { name: "Ethan Qi",  role: "Program",       photo: "", bio: "" },
        { name: "Jenny Hu",  role: "Program",       photo: "", bio: "" },
        { name: "Iris Xu",   role: "Program",       photo: "", bio: "" },
        { name: "Jasper An", role: "Program",       photo: "", bio: "" },
      ]
    },
    {
      section: "Secretaries",
      members: [
        { name: "Yutong Du",  role: "Performers",      photo: "", bio: "" },
        { name: "Jasper An",  role: "Volunteer Hours", photo: "", bio: "" },
      ]
    },
    {
      section: "Previous Members",
      members: [
        { name: "Elva Liang", role: "Program", photo: "", bio: "" },
        { name: "Yiwen Wang", role: "Program", photo: "", bio: "" },
      ]
    },
  ],

  // -- Media consent form --
  mediaConsentForm: "documents/Music In Motion Media Consent Form.pdf",

  // -- Social media links --
  // Leave a URL empty ("") to hide that icon.
  social: {
    instagram: "https://www.instagram.com/musicinmotion_ottawa/",
    youtube: "",     // e.g. "https://www.youtube.com/@musicinmotionottawa"
    email: "musicinmotionottawa@gmail.com"
  },

  // -- Mailing-list sign-up --
  mailingListHeading: "Join Our Mailing List",
  mailingListText: "Stay up to date with upcoming performances and volunteer opportunities. Sign up and we'll keep you in the loop!",
  mailingListUrl: "https://docs.google.com/forms/d/15G_dtWYsMja79jGj54LpJdbfL5qCJroiZm51LrRzYsA/viewform"
};

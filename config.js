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
  events: [
    {
      title: "Music in Motion Performance",
      date: "April 12, 2026",
      day: "Sunday",
      time: "2:00 pm – 3:00 pm",
      location: "Timberwalk Retirement Community",
      address: "1250 Maritime Way, Kanata, ON K2K 0L7",
      signUpUrl: "https://forms.gle/HUqQXGb7yA8vzhPE9"
    },
    {
      title: "Music in Motion Performance",
      date: "April 18, 2026",
      day: "Saturday",
      time: "2:00 pm – 3:00 pm",
      location: "Chartwell Stillwater Creek Retirement Residence",
      address: "2018 Robertson Rd, Nepean, ON K2H 1C6",
      signUpUrl: "https://forms.gle/kpALZnoT6WMcU5jGA"
    }
  ],

  // -- Videos --
  // Paste YouTube URLs here. Supported formats:
  //   "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  //   "https://youtu.be/XXXXXXXXXXX"
  videos: [
    // { title: "Spring 2026 Concert Highlights", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    // { title: "Holiday Concert 2025",           url: "https://youtu.be/XXXXXXXXXXX" },
  ],

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

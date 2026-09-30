/*
  RainesMedia — portfolio content
  ================================
  Edit this file to add, remove or reorder projects and experience.
  Everything here renders on /work, and the first four projects also
  appear in "Selected work" on the homepage.

  PROJECT FIELDS
    title    Project name (required)
    kind     What it is — "Documentary", "Trailer", "Channel"…
    context  Where it came from — "College · Year 1", "Client", "Personal"
    year     e.g. "2025" (optional)
    role     Your role — "Director, editor" (optional)
    blurb    One or two sentences
    image    Filename in assets/images/, e.g. "ctrl.jpg" (optional)
    video    A YouTube / TikTok / Instagram URL (optional). YouTube links
             pull their thumbnail automatically if you haven't set an image.
    link     Any other link, e.g. a channel page (optional)
    linkLabel  Text for that link (optional, defaults to "Visit")

  Empty fields ("") are simply hidden on the site.
  To add a project, copy one { … } block, paste it where you want it
  in the list, and change the values. Keep the comma between blocks.
*/

window.RM_PROJECTS = [
  {
    title: "CTRL — The Way Algorithms Control Our Lives",
    kind: "Documentary",
    context: "College · Year 1",
    year: "",
    role: "",
    blurb: "My first-year college documentary, looking at how the algorithms behind our feeds shape what we watch, buy and believe.",
    image: "ctrl.jpg",
    video: "",
    link: "",
    linkLabel: ""
  },
  {
    title: "‘Just Leave…’",
    kind: "Trailer",
    context: "College · Year 2 FMP",
    year: "",
    role: "",
    blurb: "The trailer for my second-year Final Major Project.",
    image: "just-leave.jpg",
    video: "",
    link: "",
    linkLabel: ""
  },
  {
    title: "Rogue",
    kind: "Content",
    context: "",
    year: "",
    role: "",
    blurb: "Content produced for Rogue.",
    image: "rogue.jpg",
    video: "",
    link: "",
    linkLabel: ""
  },
  {
    title: "RainesFilms",
    kind: "Channel",
    context: "Personal",
    year: "Ongoing",
    role: "Creator",
    blurb: "My own channel across YouTube, TikTok and Instagram — shot, cut and posted end to end.",
    image: "rainesfilms.jpg",
    video: "",
    link: "https://www.youtube.com/@rainesfilms",
    linkLabel: "YouTube"
  }
];

/*
  EXPERIENCE FIELDS
    role     Your title
    org      Who it was for
    period   e.g. "2024 — Now" (optional)
    blurb    One or two sentences (optional)
*/

window.RM_EXPERIENCE = [
  {
    role: "Freelance social media & short-form video",
    org: "RainesMedia",
    period: "Now",
    blurb: "Social media management, short-form video, paid social and influencer partnerships for brands."
  },
  {
    role: "Creator",
    org: "RainesFilms",
    period: "",
    blurb: "Running my own channel across YouTube, TikTok and Instagram."
  },
  {
    role: "",
    org: "Rogue",
    period: "",
    blurb: ""
  },
  {
    role: "Media student",
    org: "College",
    period: "",
    blurb: "First-year documentary ‘CTRL’ and second-year FMP ‘Just Leave…’."
  }
];

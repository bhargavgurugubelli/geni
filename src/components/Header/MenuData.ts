// src/components/Header/MenuData.ts
export const headerMenu = [
  {
    title: "About Us",
    children: [
      { title: "Vision and Values", href: "/about/vision" },
      { title: "Our Philosophy", href: "/about/philosophy" },

      { title: "Our People", href: "/about/people" },
      { title: "Our Campuses", href: "/campus" },
    ],
  },
  {
    title: "Academics",
    children: [
      { title: "Curriculum Overview", href: "/programs" },
      { title: "PrePrimary School", href: "/academics/preprimary" },
      { title: "Primary School", href: "/academics/primary" },
      { title: "Middle School", href: "/academics/middle" },

    ],
  },
  {
    title: "Genesis",
    children: [
      { title: "Beyond Academics", href: "/life/beyondacademics" },
      { title: "Genesis Initiatives", href: "/difference" },

    ],
  },
  {
    title: "Admissions",
    children: [
      { title: "Admissions", href: "/admissions/process" },
      { title: "Schedule", href: "/admissions/schedule" },
      { title: "Admission Process", href: "/admissions" },
      { title: "Why Us", href: "/initiatives-details" },

      //{ title: "Fee Structure", href: "/admissions/fees" },//
      //{ title: "Apply Now", href: "/admissions/apply" },//
    ],
  },
  { title: "Gallery", href: "/gallery" },




];

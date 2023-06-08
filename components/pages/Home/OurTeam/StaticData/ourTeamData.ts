
type ProjectInfoValueType = { title: string, logo: string }

const projectsInfo = {
  dargah: {
    title: 'سازمان راهداری و حمل و نقل جاده ای',
    logo: 'dargah.png',
  },
  vezaratRah: {
    title: 'وزارت راه و شهرسازی',
    logo: 'vezarat-rah.png',
  },
  banader: {
    title: 'سازمان بنادر و دریانوردی',
    logo: 'banader.png',
  },
  binearz: {
    title: 'باین ارز',
    logo: 'binearz.png',
  },
  entezami: {
    title: 'فرماندهی انتظامی جمهوری اسلامی ایران ( ناجا)',
    logo: 'entezami.png',
  },
  jamejam: {
    title: 'جام جم نیوز',
    logo: 'jamejam-news.png',
  },
  kharazmi: {
    title: 'شرکت داده پردازی خوارزمی',
    logo: 'kharazmi.png',
  },
  mediniom: {
    title: 'مدینیوم',
    logo: 'mediniom.png',
  },
  mellat: {
    title: 'بانک ملت',
    logo: 'mellat.png',
  },
  mopon: {
    title: 'موپن',
    logo: 'mopon.png',
  },
  jika: {
    title: 'جیکا',
    logo: 'jika.png',
  },
  nabz: {
    title: 'نبض هوشمند سلامت',
    logo: 'nabz.png',
  },
  otaghBazargani: {
    title: 'اتاق بازرگانی، صنایع، معادن و کشاورزی تهران',
    logo: 'otagh-bazargani.png',
  },
  rotbebandi: {
    title: ' شرکت مشاور رتبه بندی ایران',
    logo: 'rotbebandi.png',
  },
  saderat: {
    title: 'بانک صادرات',
    logo: 'saderat.png',
  },
  sapost: {
    title: 'صاپست',
    logo: 'sapost.png',
  },
  sazmanAsnad: {
    title: 'سازمان ثبت اسناد و املاک کشور',
    logo: 'asnad.png',
  },
  sina: {
    title: 'شرکت توسعه خدمات دریایی و بندری سینا',
    logo: 'sina.png',
  },
  helal: {
    title: 'سازمان مدیریت بحران کشور',
    logo: 'helal.png',
  },
  serat: {
    title: 'صراط نیوز',
    logo: 'serat.png',
  },
  soodaro: {
    title: 'سودارو',
    logo: 'soodaro.png',
  },
  yasan: {
    title: 'یاسان',
    logo: 'yasan.png',
  },
}

export type SkillType = {
  info: ProjectInfoValueType, description: string
}

type OurTeamDataType = {
  fullName: string;
  jobTitle: string;
  description: string;
  skills: SkillType[];
  image: string;
}[]

const ourTeamData: OurTeamDataType = [
  {
    fullName: 'میثم حیدری',
    jobTitle: 'Backend Developer',
    description: 'کارشناس ارشد نرم افزار و دکترای مدیریت کسب  و کار از دانشگاه علامه طباطبایی با بیش از 20 سال سابقه فعالیت در حوزه مدیریت و فناوری اطلاعات',
    image: 'heydari.png',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'مدیر فنی سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.vezaratRah,
        description: 'مدیر فناوری اطلاعات در طرح تفصیلی معماری، لجستیک و حمل و نقل',
      },
      {
        info: projectsInfo.banader,
        description: 'مدیر پروژه سامانه مدیریت، نظارت و کنترل عملیات بندری کانتینری',
      },
      {
        info: projectsInfo.banader,
        description: 'مشاور سازمان بنادر در ایجاد کانکتور سیستم های سازمان با گمرک و ایجاد بستر یکپارچه تبادلات اقتصادی',
      },
      {
        info: projectsInfo.sina,
        description: 'مشاور فناوری اطلاعات در استقرار سامانه tos',
      },
      {
        info: projectsInfo.sazmanAsnad,
        description: 'مدیر پروژه سامانه یکپارچه مدیریت اجرای اسناد رسمی',
      },
      {
        info: projectsInfo.helal,
        description: 'مدیره پروژه سیستم مکانیزه فرایندهای انبار',
      },
      {
        info: projectsInfo.helal,
        description: 'مدیر پروژه سامانه مدیریت انبارهای بحران کشور',
      },
      {
        info: projectsInfo.otaghBazargani,
        description: 'طراحی و پیاده سازی سامانه بانک اطلاعات کالای اداره بازرگانی استان تهران',
      },
      {
        info: projectsInfo.banader,
        description: 'تحلیل و مدیریت پروژه سامانه جامع امور بندری',
      },
      {
        info: projectsInfo.entezami,
        description: 'تحلیل و طراحی پروژه کدینگ نظام آماری جرائم مرکز فرماندهی و کنترل ناجا',
      },
      {
        info: projectsInfo.entezami,
        description: 'ناظر و مشاور پروژه 110 کشور و طرح مهار جرائم',
      },
    ]
  },
  {
    fullName: 'محمدرضا خداخواه',
    jobTitle: 'Product Owner',
    description: 'کارشناس مهندسی  نرم افزار با بیش از 10 سال سابقه فعالیت در حوزه مدیریت و فناوری اطلاعات',
    image: 'khodakhah.png',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'مدیر پروژه سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر ارشد پروژه های نرم افزاری مالی - سپهری بانک صادرات',
      },
      {
        info: projectsInfo.saderat,
        description: 'تحلیل و مدیریت پروژه سامانه‌های مبارزه با پولشویی بانک صادرات',
      },
      {
        info: projectsInfo.saderat,
        description: 'برنامه نویس Full-stack سامانه مدیریت امنیت و کنترل دسترسی بانک صادرات',
      },
    ]
  },
  {
    fullName: 'سید حبیب اله موسوی سجاد',
    jobTitle: 'Backend Developer',
    description: 'کارشناس ارشد مهندسی نرم افزار با بیش از 11 سال سابقه فعالیت در حوزه برنامه نویسی ',
    image: 'habib.png',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'برنامه نویس سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر پروژه سامانه‌های قبوض بانک صادرات',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر پروژه سامانه بهداشت و درمان اداره رفاه بانک صادرات',
      },
      {
        info: projectsInfo.mellat,
        description: 'برنامه نویس سامانه جامع منابع انسانی بانک ملت',
      },
    ]
  },
  {
    fullName: 'علی متین فر',
    jobTitle: 'FrontEnd Developer',
    description: 'کارشناس نرم افزار با بیش از 4 سال سابقه فعالیت در حوزه برنامه نویسی ',
    image: 'matin.png',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'برنامه نویس سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.nabz,
        description: 'برنامه نویس ReactJS سامانه پنل ادمین نبض',
      },
      {
        info: projectsInfo.nabz,
        description: 'برنامه نویس  Django و ReactJS سامانه سامان (مدیریت ورود ، خروج و ثبت گزارش کاری کارکنان)',
      },
      {
        info: projectsInfo.mediniom,
        description: ' توسعه و رهبری تیم FrontEnd سامانه مدینیوم',
      },
      {
        info: projectsInfo.binearz,
        description: ' توسعه و رهبری تیم FrontEnd سامانه صرافی باین ارز',
      },
      {
        info: projectsInfo.soodaro,
        description: ' توسعه و رهبری تیم FrontEnd سامانه سودارو',
      },
    ]
  },
  {
    fullName: 'حسین مبینی',
    jobTitle: 'Product Designer',
    description: 'کارشناس ارشد مدیریت کارآفرینی گرایش کسب و کار جدید از دانشگاه خوارزمی با بیش از 5 سال تجربه طراحی محصول',
    image: 'hosein.png',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'طراحی رابط کاربری سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.rotbebandi,
        description: 'طراحی رابط کاربری سامانه رتبه بندی اعتباری شرکت مشاور رتبه بندی ایران',
      },
      {
        info: projectsInfo.serat,
        description: 'طراحی رابط کاربری سایت خبری صراط نیوز',
      },
      {
        info: projectsInfo.jamejam,
        description: 'طراحی رابط کاربری سایت جام جم نیوز',
      },
      // {
      //   info: projectsInfo.soodaro,
      //   description: 'طراحی رابط کاربری وبسایت خبری خبرنگاران جوان',
      // },
      // {
      //   info: projectsInfo.soodaro,
      //   description: 'طراحی رابط کاربری وبسایت خبری دانا نیوز',
      // },
      {
        info: projectsInfo.yasan,
        description: 'طراحی سامانه مدیریت فرایند کارخانه طلاسازی یاسان',
      },
      // {
      //   info: projectsInfo.soodaro,
      //   description: 'مدیر تولید و تدوینگر شرکت  تبلیغاتی دناج',
      // },
      {
        info: projectsInfo.sapost,
        description: 'طراحی رابط کاربری سامانه صاپست',
      },
      {
        info: projectsInfo.mopon,
        description: 'طراحی رابط کاربری سایت موپن',
      },
      {
        info: projectsInfo.jika,
        description: 'طراحی رابط کاربری اپلیکیشن پیام‌رسان جیکا',
      },
      // {
      //   info: projectsInfo.soodaro,
      //   description: 'طراحی رابط کاربری اپلیکشن سیگنال ، در زمینه پیشبینی بازار ارز ،',
      // },
      // {
      //   info: projectsInfo.soodaro,
      //   description: 'طراحی رابط کاربری پروژه بین المللی کاریابی  QouteFinder',
      // },
    ]
  },
]

export default ourTeamData;
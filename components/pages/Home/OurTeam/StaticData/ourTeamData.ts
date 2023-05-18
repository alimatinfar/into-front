
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
    logo: 'jamejam.png',
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
  modiriatBohran: {
    title: 'سازمان مدیریت بحران کشور',
    logo: 'modiriat-bohran.png',
  },
  mopon: {
    title: 'موپن',
    logo: 'mopon.png',
  },
  jika: {
    title: 'جیکا',
    logo: 'mopon.png',
  },
  nabz: {
    title: 'نبض هوشمند سلامت',
    logo: 'nabz.webp',
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
    title: 'سازمان اسناد و کتابخانه ملی',
    logo: 'sazman-asnad.png',
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
  }
}

export type SkillType = {
  info: ProjectInfoValueType, description: string
}

type OurTeamDataType = {
  fullName: string;
  jobTitle: string;
  description: string;
  skills: SkillType[];
}[]

const ourTeamData: OurTeamDataType = [
  {
    fullName: 'میثم حیدری',
    jobTitle: 'Backend Developer',
    description: 'کارشناس ارشد نرم افزار و دکترای مدیریت کسب  و کار از دانشگاه علامه طباطبایی با بیش از 20 سال سابقه فعالیت در حوزه مدیریت و فناوری اطلاعات',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'مدیر فنی تیم در پیاده سازی سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.vezaratRah,
        description: 'مدیر فناوری اطلاعات در طرح تفصیلی معماری لجستیک و حمل و نقل',
      },
      {
        info: projectsInfo.banader,
        description: 'مدیر پروژه و نرم افزار در سامانه مدیریت ، نظارت و کنترل عملیات بندری کانتینری',
      },
      {
        info: projectsInfo.banader,
        description: 'مشاور سازمان بنادر در ایجاد کانکتور سیستم های بنادر با گمرک و بستر یکپارچه تبادلات اقتصادی',
      },
      {
        info: projectsInfo.dargah,
        description: 'مشاور فناوری اطلاعات در استقرار سامانه TOS',
      },
      {
        info: projectsInfo.sazmanAsnad,
        description: 'مدیر پروژه در سامانه یکپارچه مدیریت اجرای اسناد رسمی',
      },
      {
        info: projectsInfo.sazmanAsnad,
        description: 'مدیره پروژه سیستم مکانیزه فرایند های انبار',
      },
      {
        info: projectsInfo.modiriatBohran,
        description: 'مدیر پروژه سیستم مدیریت انبارهای بحران کشور',
      },
      {
        info: projectsInfo.otaghBazargani,
        description: 'طراحی و پیاده سازی سیستم بانک اطلاعات کالا اداره بازرگانی استان تهران',
      },
      {
        info: projectsInfo.banader,
        description: 'تحلیل و مدیریت پروژه در سیستم جامع امور بندری',
      },
      {
        info: projectsInfo.entezami,
        description: 'تحلیل و طراحی پروژه کدینگ نظام آماری جرایئم مرکز فرماندهی و کنترل ناجا',
      },
      {
        info: projectsInfo.entezami,
        description: 'ناظر و مشاور پروژه نرم افزار 110 کشور و طرح مهار جرائم',
      },
    ]
  },
  {
    fullName: 'محمدرضا خداخواه',
    jobTitle: 'Product Owner',
    description: 'کارشناس مهندسی  نرم افزار با بیش از 10 سال سابقه فعالیت در حوزه مدیریت و فناوری اطلاعات',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'مدیر پروژه سامانه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر ارشد پروژه های نرم افزاری بانک صادرات',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر پروژه سامانه های پولشویی بانک صادرات',
      },
      {
        info: projectsInfo.kharazmi,
        description: 'برنامه نویس Full-stack developer  در داده پردازی خوارزمی ',
      },
    ]
  },
  {
    fullName: 'سید حبیب اله موسوی سجاد',
    jobTitle: 'Backend Developer',
    description: 'کارشناس ارشد مهندسی نرم افزار و بیش از 11 سال سابقه فعالیت در حوزه برنامه نویسی ',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'کارشناس برنامه نویسی در پروژه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر پروژه سیستم های قبوض بانک صادرات',
      },
      {
        info: projectsInfo.saderat,
        description: 'مدیر پروژه بهداشت و درمان اداره رفاه بانک صادرات',
      },
      {
        info: projectsInfo.mellat,
        description: 'برنامه نویس در شرکت راهبران فناوری اطلاعات ، پروژه منابع انسانی بانک ملت',
      },
    ]
  },
  {
    fullName: 'علی متین فر',
    jobTitle: 'FrontEnd Developer',
    description: 'کارشناس نرم افزار و بیش از4 سال سابقه فعالیت در حوزه برنامه نویسی ',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'برنامه نویس FrontEnd پروژه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.nabz,
        description: 'برنامه نویس ReactJS در پروژه پنل ادمین نبض',
      },
      {
        info: projectsInfo.nabz,
        description: 'برنامه نویس  Django و ReactJS در  پروژه مدیریت ورود ، خروج و ثبت گزارش کاری کارکنان “سامان”',
      },
      {
        info: projectsInfo.mediniom,
        description: ' توسعه و رهبری تیم FrontEnd  در پروژه  مدینیوم',
      },
      {
        info: projectsInfo.binearz,
        description: ' توسعه و رهبری تیم FrontEnd  در پروژه  صرافی باین ارز',
      },
      {
        info: projectsInfo.soodaro,
        description: ' توسعه و رهبری تیم FrontEnd  در پروژه  سودارو',
      },
    ]
  },
  {
    fullName: 'حسین مبینی',
    jobTitle: 'Product Designer',
    description: 'کارشناس ارشد طراحی محصول با بیش از 5 سال تجربه طراحی محصولات مختلف و کارشناس ارشد مدیریت کارآفرینی گرایش کسب و کار جدید از دانشگاه خوارزمی',
    skills: [
      {
        info: projectsInfo.dargah,
        description: 'طراحی تجربه و رابط کاربری پروژه درگاه ملی حمل بار',
      },
      {
        info: projectsInfo.rotbebandi,
        description: 'طراحی تجربه و رابط کاربری پروژه رتبه بندی اعتباری شرکت مشاور رتبه بندی ایران',
      },
      {
        info: projectsInfo.serat,
        description: 'طراحی رابط کاربری وبسایت خبری صراط نیوز',
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
        description: 'طراحی سامانه مدیریت کارخانه طلاسازی برند یاسان',
      },
      // {
      //   info: projectsInfo.soodaro,
      //   description: 'مدیر تولید و تدوینگر شرکت  تبلیغاتی دناج',
      // },
      {
        info: projectsInfo.sapost,
        description: 'طراحی  رابط و تجربه کاربری سامانه صاپست',
      },
      {
        info: projectsInfo.mopon,
        description: 'طراحی رابط و تجربه کاربری برند موپن',
      },
      {
        info: projectsInfo.jika,
        description: 'طراحی رابط و تجربه کاربری اپلیکیشن جیکا ،در زمینه پیام رسانی،',
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
const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda" className="font-bold hover:text-violet-600">
          Beranda
        </a>
        <a href="#tentang" className="font-bold hover:text-violet-600">
          Tentang
        </a>
        <a href="#proyek" className="font-bold hover:text-violet-600">
          Proyek
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/sahrul-dwann"
          className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border hover:border-violet-600 hover:bg-violet-600 hover:text-white"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/shrll_184/"
          className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border hover:border-violet-600 hover:bg-violet-600 hover:text-white"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/efendi-sahrul/"
          className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border hover:border-violet-600 hover:bg-violet-600 hover:text-white"
        >
          <i className="ri-linkedin-box-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

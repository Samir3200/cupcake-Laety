import Image from 'next/image';

export default function CupcakeLaety() {
  const media = {
    heroVideo: "/Photos-videos/video6.mp4",
    menuImg: "/Photos-videos/flyer.jpeg",
    charlotteImg: "/Photos-videos/image1.jpeg",
    briocheVideo: "/Photos-videos/video3.mp4",
    platRizImg: "/Photos-videos/image2.jpeg",
    petitDejImg: "/Photos-videos/image4.jpeg",
    saleImg: "/Photos-videos/image3.jpeg",
    cupcakeVideo: "/Photos-videos/video2.mp4",
    image5: "/Photos-videos/image5.jpeg",
    image6: "/Photos-videos/image6.jpeg",
    video4: "/Photos-videos/video4.mp4",
    video5: "/Photos-videos/video5.mp4",
    video6: "/Photos-videos/video1.mp4"
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#4a3f35] font-sans">

      {/* --- HEADER DISCRET --- */}
      <nav className="py-8 text-center">
        <h1 className="text-[60px] font-serif tracking-tighter italic">Cup cake</h1>
        <div className="w-20 h-[1px] bg-[#d4bc9c] mx-auto mt-4"></div>
      </nav>
      

      <main className="max-w-full mx-auto px-0">

        {/* --- SECTION VIDÉO PRINCIPALE (Taille originale restaurée) --- */}
        <section className="flex flex-col items-center mb-20">
          <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={media.heroVideo} type="video/mp4" />
            </video>
          </div>
          <p className="mt-6 italic text-gray-500 font-serif text-lg">"La passion du fait-maison"</p>
        </section>

        {/* --- GRILLE DE CRÉATIONS (Mélange images/vidéos) --- */}

        <section className="mb-32">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-serif text-center mb-6 uppercase tracking-[0.2em]">L'album Gourmand</h2>
          </div>
          <div className="w-screen px-0">
            <div className="gallery-grid">
              <div className="rounded-2xl shadow-md flex flex-col items-center">
                <Image src={media.charlotteImg} alt="Gâteau" width={200} height={300} className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]" />
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Charlotte au chocolat</p>
              </div>
               <div className="rounded-[2rem] shadow-md flex flex-col items-center">
                <video autoPlay loop muted playsInline width="200" height="300" className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]">
                  <source src={media.briocheVideo} type="video/mp4" />
                </video>
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Brioche tressée maison</p>
              </div>
              <div className="rounded-2xl shadow-md flex flex-col items-center">
                <Image src={media.platRizImg} alt="Plat" width={200} height={300} className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]" />
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Assiette gourmande</p>
              </div>
              <div className="rounded-2xl shadow-md flex flex-col items-center">
                <Image src={media.saleImg} alt="Salé" width={200} height={300} className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]" />
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Plat salé du jour</p>
              </div>
              <div className="rounded-[2rem] shadow-md flex flex-col items-center">
                <video autoPlay loop muted playsInline width="200" height="300" className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]">
                  <source src={media.cupcakeVideo} type="video/mp4" />
                </video>
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Cupcakes gourmands</p>
              </div>
              <div className="rounded-2xl shadow-md flex flex-col items-center">
                <Image src={media.petitDejImg} alt="Petit Déjeuner" width={200} height={300} className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]" />
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Petit déjeuner maison</p>
              </div>
              {/* Ajouts */}
              <div className="rounded-2xl shadow-md flex flex-col items-center">
                <Image src={media.image5} alt="Création sucrée 5" width={200} height={300} className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]" />
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Délice fruité</p>
              </div>
              <div className="rounded-2xl shadow-md flex flex-col items-center">
                <Image src={media.image6} alt="Création sucrée 6" width={200} height={300} className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]" />
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Douceur vanillée</p>
              </div>
              <div className="rounded-[2rem] shadow-md flex flex-col items-center">
                <video autoPlay loop muted playsInline width="200" height="300" className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]">
                  <source src={media.video4} type="video/mp4" />
                </video>
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Gâteau en préparation</p>
              </div>
              <div className="rounded-[2rem] shadow-md flex flex-col items-center">
                <video autoPlay loop muted playsInline width="200" height="300" className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]">
                  <source src={media.video5} type="video/mp4" />
                </video>
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Moment gourmand</p>
              </div>
              <div className="rounded-[2rem] shadow-md flex flex-col items-center">
                <video autoPlay loop muted playsInline width="200" height="300" className="max-w-[200px] w-full max-h-[310px] object-cover rounded-[30px]">
                  <source src={media.video6} type="video/mp4" />
                </video>
                <p className="text-center text-base text-gray-800 font-semibold mt-2 bg-yellow-100 rounded px-2">Today story</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FLYER EN DESSOUS DE LA GALERIE --- */}
        <div className="flex justify-center my-12">
          <Image src={media.menuImg} alt="Flyer Cupcake Laety" width={280} height={350} className="rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-[350px] md:max-w-[350px] h-auto mt-[30px] mb-[30px]" />
        </div>

        {/* --- SECTION SNAPCHAT --- */}
        <section className="mb-32 bg-[#FFFC00]/10 rounded-[3rem] p-12 text-center border border-[#FFFC00]/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8">Prête pour une commande ?</h2>
            <div className="flex flex-row justify-center gap-[120px] flex-wrap">
            <a href="https://www.snapchat.com/add/angellajoanita" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all no-underline">
              <span className="text-2xl">
                <img src="/Photos-videos/pngtree-snapchat-icon-png-image_3584850.jpg" alt="Snapchat" width="32" height="32" className="inline-block align-middle rounded-full" />
              </span>
              <span className="font-bold tracking-tight">angellajoanita</span>
            </a>
          </div>
        </section>

      </main>

      <footer className="pb-12 text-center text-gray-400 text-sm">
        <p>© 2026 Cupcake Laety • Meaux & Environs</p>
      </footer>
    </div>
  );
}
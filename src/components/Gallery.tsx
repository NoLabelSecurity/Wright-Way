import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ChevronRight, ChevronLeft, X, ExternalLink, FolderClosed, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const IMG_BASE_URL = 'https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/content/';

interface RegularPhotoItem {
  title: string;
  loc: string;
  img: string;
  desc: string;
}

interface BASlideItem {
  id: string;
  beforeImg: string;
  afterImg: string;
  title: string;
  loc: string;
  desc: string;
}

interface Album {
  id: string;
  name: string;
  description: string;
  coverImg: string;
  type: 'regular' | 'before-after';
  photos?: RegularPhotoItem[];
  baSlides?: BASlideItem[];
}

const albumsData: Album[] = [
  {
    id: 'kitchen',
    name: 'Kitchen Remodels',
    description: 'Custom ceramic tile backsplashes, appliance integrations, and hand-finished kitchen cabinetry upgrades.',
    coverImg: IMG_BASE_URL + 'img/kitchen/D/1.jpg',
    type: 'regular',
    photos: [
      // C subfolder images
      {
        title: 'Modern Cabinet & Prep Area',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/kitchen/C/1.jpg',
        desc: 'Comprehensive modern kitchen remodel featuring hand-built custom cabinetry, premium stone countertops, and recessed light fixtures.'
      },
      {
        title: 'Kitchen Storage Optimization',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/kitchen/C/2.jpg',
        desc: 'Premium cabinetry storage drawers and custom utility pantry framing for maximum kitchen layout efficiency.'
      },
      {
        title: 'Custom Kitchen Island Installation',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/kitchen/C/3.jpg',
        desc: 'Spacious central kitchen island setup with an integrated undermount sink basin, matching fixtures, and stone countertop surface.'
      },
      {
        title: 'Built-in Appliance Integration',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/kitchen/C/4.jpg',
        desc: 'Custom-framed cabinet cavities designed to snugly house modern built-in cooking appliances and micro-ventilation systems.'
      },
      {
        title: 'Precision Timber Drawer Slides',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/kitchen/C/5.jpg',
        desc: 'Close-up of premium hardwood drawer box joints and heavy-duty smooth-sliding roller track installations.'
      },
      {
        title: 'Full Kitchen Layout Restoration',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/kitchen/C/6.jpg',
        desc: 'Completed open-concept kitchen overhaul beautifully blending rustic wood tones with high-end modern stainless steel appliances.'
      },
      // D subfolder images
      {
        title: 'Under-Cabinet Task Lighting Accent',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/kitchen/D/1.jpg',
        desc: 'Warm under-cabinet LED light strip placement highlights precision-cut tile joints and protects workspace visibility.'
      },
      {
        title: 'Premium Farmhouse Sink Plumbing',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/kitchen/D/2.jpg',
        desc: 'Heavy-duty double-basin farmhouse sink mount featuring professional plumbing configurations and solid sealant trims.'
      },
      {
        title: 'Stone Countertop Edge & Junction Seal',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/kitchen/D/3.jpg',
        desc: 'Perfectly level countertop alignment, sealed with premium moisture-proof silicone at wall tile connections.'
      }
    ]
  },
  {
    id: 'bath',
    name: 'Bathroom Renovations',
    description: 'Sleek double vanities, water-resistant plank flooring, premium shower tiling, and modern black fixtures.',
    coverImg: IMG_BASE_URL + 'img/bath/D/1.jpg',
    type: 'regular',
    photos: [
      {
        title: 'Bathroom Flooring & Trim',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/bath/bath1.jpg',
        desc: 'Water-resistant luxury vinyl plank floor installation with perfectly aligned paint-matched baseboards.'
      },
      {
        title: 'Spacious Vanity Install',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/bath/bath2.jpg',
        desc: 'Double sink vanity installation featuring custom plumbing routing and modern hardware attachments.'
      },
      {
        title: 'Custom Tile Shower',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/bath/shower1.jpg',
        desc: 'Hawk-eye detailed custom ceramic tile shower built for lifetime durability, complete with recessed niche storage.'
      },
      {
        title: 'Matte Black Plumbing Fixtures',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/bath/sink1.jpg',
        desc: 'Sleek under-mount sink basin with modern matte-black faucet fittings and professional silicone sealing.'
      },
      // D subfolder images
      {
        title: 'Premium Walk-In Shower Tiling',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/bath/D/1.jpg',
        desc: 'Hand-aligned subway tiling and custom corner trims inside a newly built shower enclosure.'
      },
      {
        title: 'Tile Niches & Corner Shelves',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/bath/D/5.jpg',
        desc: 'Seamlessly integrated ceramic tile shower niche, meticulously aligned with surrounding wall joints.'
      },
      {
        title: 'Frameless Glass Enclosure Framing',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/bath/D/6.jpg',
        desc: 'Solid structural wall anchoring designed to hold heavy-duty frameless glass panel doors.'
      },
      {
        title: 'Polished Floor Drain Fitment',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/bath/D/7.jpg',
        desc: 'Integrated square tile drain assembly, sloped and leveled to match final shower pan grade.'
      }
    ]
  },
  {
    id: 'interior',
    name: 'Interior Carpentry',
    description: 'Timber structural partitioning, level-5 drywalling, ceiling framing, load-bearing support headers, and subfloor prep.',
    coverImg: IMG_BASE_URL + 'img/interior/C/1.jpg',
    type: 'regular',
    photos: [
      // C subfolder images
      {
        title: 'Precision Crown Molding',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/C/1.jpg',
        desc: 'High-end crown molding installation aligning seamlessly with wall framing joints.'
      },
      {
        title: 'Trim Joint & Baseboard Fitment',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/interior/C/2.jpg',
        desc: 'Perfectly mitered baseboard joints forming a tight and professional interior border.'
      },
      {
        title: 'Custom Window Trim Framing',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/C/3.jpg',
        desc: 'Premium wooden window casing and hand-aligned sill trim woodwork.'
      },
      {
        title: 'In-Wall Closet Shelving Structure',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/interior/C/4.jpg',
        desc: 'Custom-built recessed storage shelves tailored for maximum room layout utility.'
      },
      {
        title: 'Heavy-Duty Door Jamb Alignment',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/interior/C/5.jpg',
        desc: 'Solid timber door frame alignment and heavy structural hinge reinforcement.'
      },
      {
        title: 'Ceiling Plank Accent Installation',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/C/6.jpg',
        desc: 'Rustic tongue-and-groove wooden planks beautifully mounted on overhead ceiling joists.'
      },
      {
        title: 'Secure Handrail Support Brackets',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/interior/C/7.jpg',
        desc: 'Deep-anchored metal stair handrail brackets guaranteeing safety and longevity.'
      },
      {
        title: 'Wainscoting Board Panel Accent',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/C/8.jpg',
        desc: 'Classic dining room wainscoting board installation with clean, sanded transitions.'
      },
      // D subfolder images
      {
        title: 'Built-In Living Room Shelving',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/D/1.jpg',
        desc: 'Elegant built-in wall bookcase units with adjustable heavy-load shelves.'
      },
      {
        title: 'Barn Door Sliding Track Install',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/interior/D/2.jpg',
        desc: 'Black powder-coated industrial steel track mount for dual sliding barn doors.'
      },
      {
        title: 'Solid-Core Door Hanging',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/interior/D/3.jpg',
        desc: 'Framed and balanced heavy wood door installation with brass handle accents.'
      },
      {
        title: 'Hardwood Stair Tread Fitting',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/D/4.jpg',
        desc: 'Premium oak stair tread panels with non-slip routing and pristine finish.'
      },
      {
        title: 'Geometric Accent Wall Trim',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/interior/D/5.jpg',
        desc: 'Custom linear wood trims forming a modern aesthetic accent pattern on drywalls.'
      },
      // E subfolder images
      {
        title: 'Fireplace Mantel Assembly',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/E/1.jpg',
        desc: 'Heavy timber mantel shelf mounting with hidden structural anchors above masonry.'
      },
      {
        title: 'Curved Archway Drywall Framing',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/interior/E/2.jpg',
        desc: 'Precision curved timber frame guide used to create a smooth, rounded foyer entryway.'
      },
      {
        title: 'Exposed Faux Ceiling Beams',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/interior/E/3.jpg',
        desc: 'Rustic box-beam ceiling installation with beautiful hand-distressed detailing.'
      },
      {
        title: 'Board & Batten Bedroom Accent',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/interior/E/4.jpg',
        desc: 'Beautiful half-wall board and batten carpentry panels adding texture and depth.'
      },
      {
        title: 'Miter-Cut Baseboard Transitions',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/interior/E/5.jpg',
        desc: 'Close-up of flawlessly matched corner casing angles showing professional precision.'
      },
      {
        title: 'Folding Attic Ladder Framing',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/interior/E/6.jpg',
        desc: 'Ceiling joist modification and installation of insulated attic folding stairways.'
      }
    ]
  },
  {
    id: 'exterior',
    name: 'Exterior Projects',
    description: 'Vapor weatherproofing, heavy post framing, structural siding restorations, and outdoor shed remodels.',
    coverImg: IMG_BASE_URL + 'img/exterior/big-house/1.jpg',
    type: 'regular',
    photos: [
      {
        title: 'Complete Exterior Overview',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/1.jpg',
        desc: 'A comprehensive view of the stunning large house remodel, featuring high-durability siding, a newly shingled roof, and elegant white porch pillars.'
      },
      {
        title: 'Front Facade & Trim Work',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/2.jpg',
        desc: 'Beautifully detailed trim wrapping and pristine window frames showcasing professional exterior craftsmanship.'
      },
      {
        title: 'Roofing & Siding Alignment',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/3.jpg',
        desc: 'Clean, modern siding panel alignment meeting a perfectly installed architectural shingle roofline.'
      },
      {
        title: 'Double-Decker Rear Deck',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/4.jpg',
        desc: 'Sturdy multi-level outdoor wooden deck framing with clean baluster railings and robust structural footings.'
      },
      {
        title: 'Upper Deck View & Joinery',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/5.jpg',
        desc: 'Premium wood decking boards and handrails with weather-sealed joinery designed to withstand the elements.'
      },
      {
        title: 'Under-Deck Drainage & Support',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/6.jpg',
        desc: 'Heavy-duty structural posts and joists providing rock-solid support for the elevated patio area.'
      },
      {
        title: 'Rear Elevation & Windows',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/7.jpg',
        desc: 'A rear-angle perspective highlighting professional window flashing and vapor barrier siding installation.'
      },
      {
        title: 'Porch Framing & Column Supports',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/exterior/big-house/8.jpg',
        desc: 'A close-up of the elegant white pillar installations and perfectly leveled porch floor joists.'
      }
    ]
  },
  {
    id: 'exterior-close-in',
    name: 'Exterior Close-Ins',
    description: 'Porch enclosures, custom framing, timber partitioning, wall sheathing, and complete climate sealing.',
    coverImg: IMG_BASE_URL + 'img/exterior/close-in/1.jpg',
    type: 'regular',
    photos: [
      {
        title: 'Porch Framing & Enclosure',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/1.jpg',
        desc: 'Custom wooden framing to close in an existing outdoor porch area for year-round utility.'
      },
      {
        title: 'Sill Plate & Floor Joist Framing',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/2.jpg',
        desc: 'Solid anchor-bolted timber sill plate installation to form a level enclosure foundation.'
      },
      {
        title: 'Exterior Wall Sheathing',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/3.jpg',
        desc: 'Heavy-duty structural plywood wall sheathing securely fastened to timber wall studs.'
      },
      {
        title: 'Vapor Barrier & House Wrap',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/4.jpg',
        desc: 'High-performance commercial grade weather-resistant house wrap for superior moisture control.'
      },
      {
        title: 'Insulated Glass Window Fitment',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/5.jpg',
        desc: 'Precision window frame leveling and sealing to prevent drafts and guarantee energy efficiency.'
      },
      {
        title: 'Custom Exterior Entry Door',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/6.jpg',
        desc: 'Heavy solid-core exterior door mounted in a custom-built, weatherproofed jamb.'
      },
      {
        title: 'Exterior Siding Integration',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/7.jpg',
        desc: 'Seamless siding panel alignment joining the new close-in structure with existing home surfaces.'
      },
      {
        title: 'Soffit & Fascia Ventilation Trim',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/8.jpg',
        desc: 'Custom miter-cut vinyl soffit and fascia trim work ensuring proper under-roof airflow.'
      },
      {
        title: 'Corner Trim & Sealing Details',
        loc: 'Batesburg-Leesville, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/9.jpg',
        desc: 'Weatherproofed vinyl corner posts and moisture-proof silicone sealant at structural joints.'
      },
      {
        title: 'Ceiling Joist & Rafter Bracing',
        loc: 'Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/10.jpg',
        desc: 'Reinforced heavy-timber overhead joist ties and roof rafter bracing structures.'
      },
      {
        title: 'Fiberglass Batt Insulation Install',
        loc: 'Lexington, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/11.jpg',
        desc: 'High-R-value fiberglass insulation batts fitted between stud cavities for optimal thermal protection.'
      },
      {
        title: 'Drywall Hanging & Corner Beading',
        loc: 'West Columbia, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/12.jpg',
        desc: 'Moisture-resistant drywall panels hung with clean corner metal bead alignments.'
      },
      {
        title: 'Completed Cozy Room Transition',
        loc: 'Richland County, SC',
        img: IMG_BASE_URL + 'img/exterior/close-in/13.jpg',
        desc: 'The fully finished and painted close-in addition providing comfortable indoor living space.'
      }
    ]
  },
  {
    id: 'b-a',
    name: 'Before & After Transformations',
    description: 'Shed siding upgrades, exterior room additions, kitchen backsplashes, and deck post structural reconstructions.',
    coverImg: IMG_BASE_URL + 'img/b-a/5/a.jpg',
    type: 'before-after',
    baSlides: [
      {
        id: 'ba_1',
        beforeImg: IMG_BASE_URL + 'img/b-a/1/b.jpg',
        afterImg: IMG_BASE_URL + 'img/b-a/1/a1.jpg',
        title: 'Outdoor Structure Repair',
        loc: 'Columbia, SC',
        desc: 'Transformation from aged, weathered external structures to fully restored, weatherproofed wood paneling.'
      },
      {
        id: 'ba_2',
        beforeImg: IMG_BASE_URL + 'img/b-a/2/b.jpg',
        afterImg: IMG_BASE_URL + 'img/b-a/2/b1.jpg',
        title: 'Interior Wall Restoration',
        loc: 'Lexington, SC',
        desc: 'Restoring cracked and damaged interior plaster and drywall to a flawless, smooth, paint-ready surface.'
      },
      {
        id: 'ba_3',
        beforeImg: IMG_BASE_URL + 'img/b-a/3/b.jpg',
        afterImg: IMG_BASE_URL + 'img/b-a/3/481219143_965524945687753_7599621349112299489_n.jpg',
        title: 'Kitchen Remodeling Overhaul',
        loc: 'West Columbia, SC',
        desc: 'Before and after perspective of old outdated layouts transformed into a bright, modern custom kitchen space.'
      },
      {
        id: 'ba_4',
        beforeImg: IMG_BASE_URL + 'img/b-a/4/b.jpg',
        afterImg: IMG_BASE_URL + 'img/b-a/4/93012075_2601564693425404_1542811321408421888_n.jpg',
        title: 'Exterior Siding & Trim Renewal',
        loc: 'Richland County, SC',
        desc: 'Replacing outdated exterior materials with high-durability modern vinyl siding and precision trim.'
      },
      {
        id: 'ba_5',
        beforeImg: IMG_BASE_URL + 'img/b-a/5/b.jpg',
        afterImg: IMG_BASE_URL + 'img/b-a/5/a.jpg',
        title: 'Bathroom Vanity & Tiling Upgrade',
        loc: 'Batesburg-Leesville, SC',
        desc: 'Modern bath fixture conversion featuring beautiful new tile joints, polished basins, and clean plumbing seals.'
      }
    ]
  }
];

export const Gallery: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  // Total items in currently selected album
  const totalItems = selectedAlbum
    ? (selectedAlbum.type === 'regular' 
        ? (selectedAlbum.photos?.length || 0) 
        : (selectedAlbum.baSlides?.length || 0))
    : 0;

  const handlePrev = () => {
    if (totalItems <= 1) return;
    setActiveMediaIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    if (totalItems <= 1) return;
    setActiveMediaIndex((prev) => (prev + 1) % totalItems);
  };

  // Keyboard navigation support
  useEffect(() => {
    if (!selectedAlbum) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setSelectedAlbum(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAlbum, activeMediaIndex, totalItems]);

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
    setActiveMediaIndex(0);
  };

  // Helper to format GitHub links
  const getGithubLink = (imgUrl: string) => {
    return imgUrl.replace(
      'https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/content/',
      'https://github.com/NoLabelSecurity/Wright-Way-Services-LLC/blob/content/'
    );
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-charcoal w-full relative overflow-hidden">
      {/* Structural background decoration */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(34,197,94,.06),transparent)' }}></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(34,197,94,.04),transparent)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-default/10 border border-brand-default/30 rounded-full px-4 py-1.5 mb-4">
            <ImageIcon className="w-4 h-4 text-brand-default" /> 
            <span className="text-brand-default text-sm font-semibold uppercase tracking-wider">Project Showcase</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">Interactive Project Gallery</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Select a project album below to open high-resolution views of our professional remodeling, carpentry, and repair work with full side-scrolling.
          </p>
        </div>

        {/* ALBUM CARDS GRID (Shorter height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {albumsData.map((album) => {
            const itemCount = album.type === 'regular' 
              ? (album.photos?.length || 0) 
              : (album.baSlides?.length || 0);
            
            return (
              <div
                key={album.id}
                onClick={() => openAlbum(album)}
                className="group relative h-[180px] sm:h-[200px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 shadow-md hover:shadow-2xl hover:border-brand-default/40 hover:-translate-y-1 bg-navy-default/40"
              >
                {/* Cover Image Background */}
                <img
                  src={album.coverImg}
                  alt={album.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Overlay which REDUCES transparency on-hover (No blur) */}
                <div className="absolute inset-0 bg-charcoal/70 group-hover:bg-charcoal/25 transition-all duration-300 pointer-events-none"></div>

                {/* Album Content & Badges */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-left">
                  {/* Top line badges */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-brand-default/90 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                      <FolderClosed className="w-3 h-3" />
                      <span>{album.type === 'before-after' ? 'Before & After' : 'Album'}</span>
                    </span>
                    <span className="text-[10px] font-bold font-mono text-gray-200 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      {itemCount} {album.type === 'before-after' ? 'Transformations' : 'Photos'}
                    </span>
                  </div>

                  {/* Album Text & Arrow */}
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-[80%]">
                      <h3 className="font-heading font-black text-white text-base sm:text-lg group-hover:text-brand-default transition-colors">
                        {album.name}
                      </h3>
                      <p className="text-gray-300 text-[11px] leading-tight mt-0.5 line-clamp-1">
                        {album.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-default/95 text-white flex items-center justify-center shadow shrink-0 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* POP-OPEN HIGH-FIDELITY PHOTO ALBUM WINDOW (WITHOUT BLUR, MOBILE PORTRAIT OPTIMIZED) */}
      {selectedAlbum && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300"
          onClick={() => setSelectedAlbum(null)}
        >
          {/* Top Close Button & Pagination Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50">
            <div className="bg-navy-default border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-gray-200 shadow-xl flex items-center gap-2">
              <span className="text-brand-default font-black uppercase tracking-wider">{selectedAlbum.name}</span>
              <span className="text-white/20">|</span>
              <span className="text-gray-300 font-bold">{activeMediaIndex + 1} of {totalItems}</span>
            </div>
            <button 
              onClick={() => setSelectedAlbum(null)} 
              className="text-white hover:text-brand-default transition-all duration-200 p-2.5 bg-navy-default rounded-full border border-white/10 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div 
            className="max-w-4xl w-full relative flex flex-col items-center justify-center px-2 sm:px-4" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Side-Scroll Left Arrow (Mobile-friendly overlaid position) */}
            {totalItems > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:-left-16 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/85 hover:bg-brand-default border border-white/15 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer hover:border-brand-default/40"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Album Viewer Container */}
            <div className="bg-navy-default border border-white/10 rounded-2xl overflow-hidden p-3.5 sm:p-5 shadow-2xl w-full max-w-full">
              {/* Media viewer frame (Optimized heights for mobile portrait to avoid scroll offsets) */}
              <div className="relative flex items-center justify-center bg-charcoal rounded-xl overflow-hidden border border-white/5 h-[40vh] sm:h-[58vh] md:h-[62vh] group/frame">
                
                {/* REGULAR ALBUM VIEW */}
                {selectedAlbum.type === 'regular' && selectedAlbum.photos && (
                  <img 
                    src={selectedAlbum.photos[activeMediaIndex].img} 
                    alt={selectedAlbum.photos[activeMediaIndex].title} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* BEFORE & AFTER COMPARISON SLIDERS */}
                {selectedAlbum.type === 'before-after' && selectedAlbum.baSlides && (
                  <div className="w-full h-full max-w-full mx-auto flex items-center justify-center p-2">
                    <BeforeAfterSlider
                      key={selectedAlbum.baSlides[activeMediaIndex].id}
                      id={selectedAlbum.baSlides[activeMediaIndex].id}
                      beforeImg={selectedAlbum.baSlides[activeMediaIndex].beforeImg}
                      afterImg={selectedAlbum.baSlides[activeMediaIndex].afterImg}
                      aspectClass="w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* Caption Details showing brief description, location, and GitHub repository links */}
              <div className="mt-3.5 border-t border-white/10 pt-3.5 flex flex-col gap-1.5 text-left">
                {selectedAlbum.type === 'regular' && selectedAlbum.photos && (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
                      <h3 className="text-white font-heading font-black text-sm sm:text-base leading-snug">
                        {selectedAlbum.photos[activeMediaIndex].title}
                      </h3>
                      <span className="text-brand-default text-[11px] font-bold font-mono tracking-wider bg-brand-default/10 px-2 py-0.5 rounded border border-brand-default/20">
                        {selectedAlbum.photos[activeMediaIndex].loc}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {selectedAlbum.photos[activeMediaIndex].desc}
                    </p>
                    
                    {/* Repository link inside content branch */}
                    <div className="mt-2 pt-2 border-t border-white/5 flex flex-wrap items-center gap-3">
                      <a 
                        href={getGithubLink(selectedAlbum.photos[activeMediaIndex].img)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-brand-default hover:text-brand-accent transition-all duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View File in Repository</span>
                      </a>
                    </div>
                  </>
                )}

                {selectedAlbum.type === 'before-after' && selectedAlbum.baSlides && (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
                      <h3 className="text-white font-heading font-black text-sm sm:text-base leading-snug">
                        {selectedAlbum.baSlides[activeMediaIndex].title}
                      </h3>
                      <span className="text-brand-default text-[11px] font-bold font-mono tracking-wider bg-brand-default/10 px-2 py-0.5 rounded border border-brand-default/20">
                        {selectedAlbum.baSlides[activeMediaIndex].loc}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {selectedAlbum.baSlides[activeMediaIndex].desc}
                    </p>
                    
                    {/* Repository links inside content branch for both Before & After images */}
                    <div className="mt-2 pt-2 border-t border-white/5 flex flex-wrap items-center gap-y-1 gap-x-4">
                      <span className="text-gray-400 text-[10px] font-black uppercase tracking-wider">Repository Files:</span>
                      <a 
                        href={getGithubLink(selectedAlbum.baSlides[activeMediaIndex].beforeImg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gray-300 hover:text-brand-default transition-all duration-200"
                      >
                        <ExternalLink className="w-3 h-3 text-brand-default" />
                        <span>Before Image (Raw)</span>
                      </a>
                      <span className="text-white/10 hidden sm:inline">•</span>
                      <a 
                        href={getGithubLink(selectedAlbum.baSlides[activeMediaIndex].afterImg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gray-300 hover:text-brand-default transition-all duration-200"
                      >
                        <ExternalLink className="w-3 h-3 text-brand-default" />
                        <span>After Image (Finished)</span>
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Horizontal scrollable indicators/thumbnails for quick selection (Highly responsive) */}
              <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pb-1 max-w-full">
                {Array.from({ length: totalItems }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeMediaIndex === idx 
                        ? 'w-7 bg-brand-default' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Side-Scroll Right Arrow (Mobile-friendly overlaid position) */}
            {totalItems > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:-right-16 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/85 hover:bg-brand-default border border-white/15 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer hover:border-brand-default/40"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { Star } from 'lucide-react';

interface ReviewData {
  stars: number;
  text: string;
  name: string;
  location: string;
  userImg: string;
  projectImg: string;
  projectTitle: string;
  verifiedTag?: string;
}

const reviews: ReviewData[] = [
  {
    stars: 5,
    text: 'We couldn’t be happier with the work Robert did converting our dining space into a master closet extension. He was professional, easy to work with, and made sure everything was done right the first time. The quality of the finish and craftsmanship exceeded our expectations. If you want it done right, Wright-Way Services is the way to go.',
    name: 'Brian L.',
    location: 'Mountain Rest, SC',
    userImg: 'https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way/content/imgs/prof_pic.png',
    projectImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=150&h=150&q=80',
    projectTitle: 'Master Closet Extension'
  },
  {
    stars: 5,
    text: 'Nice work. Good people to have work done.',
    name: 'Eddy Kirkland',
    location: 'Lexington, SC',
    userImg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%230f172a"/><circle cx="50" cy="38" r="18" fill="%2364748b"/><path d="M20 85 C20 66 33 58 50 58 C67 58 80 66 80 85 Z" fill="%2364748b"/></svg>',
    projectImg: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&h=150&q=80',
    projectTitle: 'Home Remodel',
    verifiedTag: 'Facebook Review'
  },
  {
    stars: 5,
    text: "Thank you and we will enjoy it. Again thank you so much for making this for us...you did a Great Job on it...!!! Even our dogs loves it lol",
    name: 'Chell Hoffman',
    location: 'West Columbia, SC',
    userImg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%230f172a"/><circle cx="50" cy="38" r="18" fill="%2364748b"/><path d="M20 85 C20 66 33 58 50 58 C67 58 80 66 80 85 Z" fill="%2364748b"/></svg>',
    projectImg: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=150&h=150&q=80',
    projectTitle: 'Deck Addition',
    verifiedTag: 'Facebook Review'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-charcoal w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-default/10 border border-brand-default/30 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-brand-default fill-brand-default" /> 
            <span className="text-brand-default text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="review-card bg-navy-default/30 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(rev.stars)].map((_, i) => (
                    <span key={i} className="star text-lg text-brand-default">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">{rev.text}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4 mb-4">
                  <img
                    src={rev.userImg}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full border border-brand-default object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-semibold text-white text-sm block">{rev.name}</span>
                    <span className="text-gray-400 text-xs">{rev.location}</span>
                  </div>
                </div>
                
                {/* Project Preview */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-2">
                  <img
                    src={rev.projectImg}
                    alt={rev.projectTitle}
                    className="w-11 h-11 object-cover rounded-lg border border-white/10 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] text-brand-default block font-semibold uppercase tracking-wider">
                      {rev.verifiedTag || 'Project Verified'}
                    </span>
                    <span className="text-white text-xs font-semibold leading-tight block">
                      {rev.projectTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

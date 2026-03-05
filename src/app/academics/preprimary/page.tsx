"use client";

import React from "react";
import Header from "@/components/Header/Header"; // ✅ Use updated Header
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";


export default function PrePrimaryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <Header /> {/* ✅ Highlights Pre-Primary menu */}

      {/* HERO SECTION */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">PrePrimary School</h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
          <Breadcrumb />
          <p className="text-lg md:text-xl mt-2">
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Key Features</h2>

        <div className="flex flex-col gap-12">
          {/* Practical Life Activities */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/888.jpeg"
                alt="Practical Life Activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Practical Life Activities</h3>
              <p className="text-gray-700">
                Practical Life Activities are foundational to our Preschool Program, offering children opportunities to develop essential life skills and autonomy.
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li><strong>Care of Self:</strong> Develop independence through daily routines.</li>
                <li><strong>Care of Indoor:</strong> Responsibility for the classroom environment.</li>
                <li><strong>Care of Outdoor:</strong> Connection to nature and surroundings.</li>
              </ul>
            </div>
          </div>

          {/* Sensorial */}
          <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img src="/sensorial.jpg" alt="Sensorial" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sensorial</h3>
              <p className="text-gray-700">Enhances children’s sensory perception and cognitive abilities.</p>
              <p className="text-gray-700 mt-2"><strong>Sensory Activities:</strong> These activities encourage children to explore and interact with different senses, helping them develop awareness of color, weight, shape, texture, size, sound, smell, and taste.</p>
            </div>
          </div>

          {/* Language Enrichment */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img src="/language.jpg" alt="Language Enrichment" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Language Enrichment</h3>
              <p className="text-gray-700">
                Focus on early literacy and communication skills.
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1"> <li>Writing Skills</li> <li>Reading and Comprehension</li> <li>Grammar</li> <li>Rhyming Words</li> </ul>
              <p className="text-gray-700 mt-2"> The Genesis Book Bag Program helps build a strong foundation for reading, comprehension, and vocabulary enrichment. </p>
            </div>
          </div>

          {/* Logic */}
          <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img src="/logic.jpg" alt="Logic" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Logic</h3>
              <p className="text-gray-700"> The Logic area introduces pre-math concepts that lay the groundwork for future mathematical understanding using concrete materials. </p> <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1"> <li>Pre-Math Concepts</li> <li>Arithmetic</li> <li>Place Value</li> <li>Four Operations</li> </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden"> <div className="md:w-1/3"> <img src="/culture.jpg" alt="Culture" className="w-full h-full object-cover" /> </div> <div className="md:w-2/3 p-6 flex flex-col justify-center"> <h3 className="text-xl font-semibold text-green-800 mb-2">Culture</h3> <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1"> <li><strong>Art:</strong> Creative activities encouraging self-expression.</li> <li><strong>History:</strong> Simple concepts of past and present.</li> <li><strong>Botany:</strong> Introduction to plant life.</li> <li><strong>Zoology:</strong> Study of animals and habitats.</li> <li><strong>Geography:</strong> Basic maps and geographical concepts.</li> <li><strong>Culture:</strong> Exploration of various cultures.</li> </ul> </div> </div>

          {/* Enrichment (Image Right) */} <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden"> <div className="md:w-1/3"> <img src="/enrichment.jpg" alt="Enrichment" className="w-full h-full object-cover" /> </div> <div className="md:w-2/3 p-6 flex flex-col justify-center"> <h3 className="text-xl font-semibold text-green-800 mb-2">Enrichment</h3> <p className="text-gray-700"> Our Enrichment Program in Preschool gives students experience in a variety of activities, supporting personal growth. </p> <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1"> <li><strong>Music:</strong> Rhythm, melody, and Carnatic vocal exercises.</li> <li><strong>Dance:</strong> Creative movement, coordination, and rhythm.</li> <li><strong>Gymnastics:</strong> Strength, flexibility, and gross motor skills.</li> <li><strong>Art:</strong> Integrated with culture topic exploration.</li> <li><strong>Sports:</strong> Basics of various sports promoting fitness and teamwork.</li> </ul> </div> </div>

          {/* Montessori Differentiators (Image Left) */} <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden"> <div className="md:w-1/3"> <img src="/montessori.jpg" alt="Montessori Differentiators" className="w-full h-full object-cover" /> </div> <div className="md:w-2/3 p-6 flex flex-col justify-center"> <h3 className="text-xl font-semibold text-green-800 mb-2">Montessori Differentiators</h3> <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1"> <li>Mixed-Age Classrooms</li> <li>Personalized Lessons</li> <li>Multisensory Learning</li> <li>Prepared Environment</li> <li>Montessori Materials</li> </ul>
          </div>
          </div>

          {/* Abode Differentiators (Image Right) */} <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden"> <div className="md:w-1/3"> <img src="/montesory.jpg" alt="Abode Differentiators" className="w-full h-full object-cover" /> </div> <div className="md:w-2/3 p-6 flex flex-col justify-center"> <h3 className="text-xl font-semibold text-green-800 mb-2">Genesis Differentiators</h3> <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1"> <li>1.Early Readers Program - Our unique phonetic-based reading program helps children master various phonograms and overcome reading challenges step by step. With a series of 120 books, it is designed to guide them toward becoming proficient readers by the age of 6.</li> <li>2.Student Led Presentations - Independent demonstration of Montessori learning in Preschool</li> <li>3.Enrichment Program - Our Enrichment Program in Preschool is designed to give experience to students in a variety of activities, helping them identify their interests and support their personal growth.</li> <li>4.Learning Spaces - A spacious, thoughtfully designed campus with bright classrooms and an outdoor area that encourages exploration and active learning.</li> </ul>
          </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* ✅ HERO ANIMATION STYLES */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 10s infinite ease-in-out;
        }

        .ball-1 {
          top: 20%;
          left: 15%;
        }

        .ball-2 {
          top: 60%;
          left: 30%;
          animation-delay: 2s;
        }

        .ball-3 {
          top: 35%;
          right: 20%;
          animation-delay: 4s;
        }

        .ball-4 {
          bottom: 20%;
          right: 35%;
          animation-delay: 6s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #c9a227, #2ecc71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

    </div>
  );
}

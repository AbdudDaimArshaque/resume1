import React from "react";

export default function Body() {
  return (
    <main>
      <div className="flex gap-32 mt-8 mx-auto justify-center">
        <div className="w-1/2 flex flex-col gap-6">
          <section>
            <h2 className="font-Oswald text-2xl font-bold tracking-wide mb-2">
              Summary
            </h2>
            <p>
            Motivated and detail-oriented aspiring front-end developer with strong skills in HTML, CSS, and JavaScript (learning). Eager to contribute to impactful projects while gaining valuable industry experience.
            </p>
          </section>
          <section>
            <h2 className="font-Oswald text-2xl font-bold tracking-wide mb-4">
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              <li className="bg-indigo-700 text-indigo-100 py-2 px-4 rounded-md">
                HTML
              </li>
              <li className="bg-indigo-700 text-indigo-100 py-2 px-4 rounded-md">
                CSS
              </li>
              <li className="bg-indigo-700 text-indigo-100 py-2 px-4 rounded-md">
                JavaScript (ongoing)
              </li>
              <li className="bg-indigo-700 text-indigo-100 py-2 px-4 rounded-md">
                A11Y accessibility
              </li>
              <li className="bg-indigo-700 text-indigo-100 py-2 px-4 rounded-md">
                DOM Manipulation
              </li>
              <li className="bg-indigo-700 text-indigo-100 py-2 px-4 rounded-md">
                UX/UI Assessment
              </li>
            </ul>
          </section>
          <br />
          <section>
            <h2 className="font-Oswald text-2xl font-bold tracking-wide mb-2">
              Education
            </h2>
            <div className="mb-2">
              <h3 className="text-xl font-bold">
                B.Tech in Computer Science & Engineering
              </h3>
              <h4>KALINGA UNIVERSITY, Raipur, India - 2024</h4>
            </div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">
                H.S.C
              </h3>
              <h4>Maharashtra State Board, Maharashtra, India - 2020</h4>
            </div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">
                S.S.C
              </h3>
              <h4>Maharashtra State Board, Maharashtra, India - 2018</h4>
            </div>
          </section>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
        <section className="mt-8">
        <h2 className="font-Oswald text-2xl font-bold tracking-wide mb-2">
          Projects
        </h2>

      
        <h4 className="mb-1">
          <span className="font-bold">Technologies Used:</span> HTML,
          CSS, Javascript
        </h4>
        <h4 className="font-Oswald text-2xl font-bold tracking-wide mb-2">Unit Converter</h4>
        <h4 className="mb-1">
          <span className="font-bold">Summary:</span> A web-based tool for converting measurements across length (meters to feet and vice versa), volume (liters to gallons and vice versa), and mass (kilograms to pounds and vice versa).
        </h4>
        <h4 className="mb-1">
          <span className="font-bold">Responsibilities:</span> 
          <ul className="mb-1 ml-4 list-disc">
          <li>
          Developed the user interface using HTML and CSS for clarity and usability.
          </li>
          <li>
          Implemented conversion logic using JavaScript for real-time calculation.
          </li>
          <li>
          Ensured accuracy and efficiency in conversions through testing.
          </li>
          </ul>
        </h4>

        <h4 className="font-Oswald text-2xl font-bold tracking-wide mb-2">Random Password Generator</h4>
        <h4 className="mb-1">
          <span className="font-bold">Summary:</span> An application to generate secure passwords up to 16 characters in length.
        </h4>
        <h4 className="mb-1">
          <span className="font-bold">Responsibilities:</span> 
          <ul className="mb-1 ml-4 list-disc">
          <li>
          Designed the layout for ease of use using HTML and CSS.
          </li>
          <li>
          Wrote JavaScript code for generating random and complex passwords.
          </li>
          <li>
          Integrated customizable length options for user convenience.
          </li>
          </ul>
        </h4>
        <h4 className="font-Oswald text-2xl font-bold tracking-wide mb-2">Lead Tracker App</h4>
        <h4 className="mb-1">
          <span className="font-bold">Summary:</span> A productivity tool to save and manage important links and browser tabs.
        </h4>
        <h4 className="mb-1">
          <span className="font-bold">Responsibilities:</span> 
          <ul className="mb-1 ml-4 list-disc">
          <li>
          Created an interactive interface using HTML and CSS for better usability.
          </li>
          <li>
          Utilized JavaScript to store and retrieve links using browser storage.
          </li>
          <li>
          Enhanced the app’s reliability and user experience through iterative testing.
          </li>
          </ul>
        </h4>
        
        </section>
        </div>
      </div>
    </main>
  );
}
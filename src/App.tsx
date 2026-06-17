import React, { useState } from "react";

export default function App() {
  const [team, setTeam] = useState([{ name: "", role: "" }]);

  const addTeamMember = () => {
    setTeam([...team, { name: "", role: "" }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Client Website Intake Form</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Fill Your Company Details
        </h2>
        <p className="text-lg">
          Submit all details required for your company secretary website.
        </p>
      </section>

      {/* Form */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10 mb-10">
        <form
          action="https://formspree.io/f/xgobqgkk"
          method="POST"
          className="space-y-10"
        >
          {/* Basic Info */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="companyName" type="text" placeholder="Company Name" className="p-3 border rounded w-full" />
              <input name="tagline" type="text" placeholder="Tagline" className="p-3 border rounded w-full" />
              <input name="firmType" type="text" placeholder="Firm Type" className="p-3 border rounded w-full" />
              <input name="yearEstablished" type="number" placeholder="Year Established" className="p-3 border rounded w-full" />
              <input name="csRegistration" type="text" placeholder="CS Registration Number" className="p-3 border rounded w-full" />
              <textarea name="aboutCompany" placeholder="About Company" className="p-3 border rounded md:col-span-2 w-full"></textarea>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="phone" type="tel" placeholder="Phone Number" className="p-3 border rounded w-full" />
              <input name="whatsapp" type="tel" placeholder="WhatsApp Number" className="p-3 border rounded w-full" />
              <input name="email" type="email" placeholder="Email Address" className="p-3 border rounded w-full" />
              <input name="officeAddress" type="text" placeholder="Office Address" className="p-3 border rounded w-full" />
              <input name="city" type="text" placeholder="City" className="p-3 border rounded w-full" />
              <input name="state" type="text" placeholder="State" className="p-3 border rounded w-full" />
              <input name="workingHours" type="text" placeholder="Working Hours" className="p-3 border rounded w-full" />
              <input name="googleMaps" type="url" placeholder="Google Maps Link" className="p-3 border rounded w-full" />
            </div>
          </section>

          {/* Services */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Services Required</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Company Registration",
                "GST Filing",
                "Annual Compliance",
                "ROC Filing",
                "Trademark Registration",
                "Legal Advisory",
                "Tax Filing",
                "Audit Support"
              ].map((service, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" name="services" value={service} />
                  {service}
                </label>
              ))}
            </div>
          </section>

          {/* Team */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Team Members</h3>
            {team.map((member, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  name={`teamName${index}`}
                  type="text"
                  placeholder="Team Member Name"
                  className="p-3 border rounded w-full"
                />
                <input
                  name={`teamRole${index}`}
                  type="text"
                  placeholder="Role"
                  className="p-3 border rounded w-full"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addTeamMember}
              className="bg-blue-700 text-white px-4 py-2 rounded"
            >
              + Add Team Member
            </button>
          </section>

          {/* Design */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">
              Website Design Preferences
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="themeColor" type="color" className="p-2 border rounded w-full" />

              <select name="websiteStyle" className="p-3 border rounded w-full">
                <option>Modern</option>
                <option>Corporate</option>
                <option>Minimal</option>
                <option>Premium</option>
              </select>

              <input name="logo" type="file" className="p-3 border rounded w-full" />
            </div>
          </section>

          {/* Additional */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Additional Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="gstNumber" type="text" placeholder="GST Number" className="p-3 border rounded w-full" />
              <input name="panNumber" type="text" placeholder="PAN Number" className="p-3 border rounded w-full" />
              <textarea name="achievements" placeholder="Achievements" className="p-3 border rounded w-full"></textarea>
              <textarea name="testimonials" placeholder="Client Testimonials" className="p-3 border rounded w-full"></textarea>
              <textarea name="extraNotes" placeholder="Extra Notes" className="p-3 border rounded md:col-span-2 w-full"></textarea>
            </div>
          </section>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
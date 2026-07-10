import React from 'react';
import { baseURL, about, person, social , neuroflowPrivacyPolicy} from "@/resources";



export const metadata = {
  title: neuroflowPrivacyPolicy.title,
  description: neuroflowPrivacyPolicy.description,
  openGraph: {
    title: neuroflowPrivacyPolicy.title,
    description: neuroflowPrivacyPolicy.description,
    url: baseURL + "neuroflowprivacy",
    siteName: person.name,
    images: [
      {
        url: baseURL + about.avatar,
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};  



export default function NeuroflowPrivacyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          {neuroflowPrivacyPolicy.title}
        </h1>

        <p className="mt-3 text-2xl">
          {neuroflowPrivacyPolicy.description}
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href={baseURL + "neuroflowprivacy"}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{neuroflowPrivacyPolicy.title} &rarr;</h3>
            <p className="mt-4 text-xl">
              {neuroflowPrivacyPolicy.description}
            </p>
          </a>

        {neuroflowPrivacyPolicy.content}

        </div>





      </main>


      

    </div>
  );
} 





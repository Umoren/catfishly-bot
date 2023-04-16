import { Fragment } from 'react';
import Head from 'next/head';
// import { FaQuestionCircle } from 'react-icons/fa';
import { Accordion, AccordionItem } from "flowbite-react";
import Image from 'next/image';

export default function ChatbotPage() {
  const currentYear = new Date().getFullYear();
  const faqItems = [
    {
      question: 'How do I improve water quality in my catfish pond?',
      answer: 'Improve water quality by maintaining proper pond depth, providing adequate aeration, removing sludge regularly, and practicing good feeding management.',
    },
    {
      question: 'What is the best feeding practice for catfish?',
      answer: 'Feed catfish with high-quality feeds that meet their nutritional needs, and avoid overfeeding or underfeeding.',
    },
    // Add more FAQ items here...
  ];

  return (
    <Fragment>
      <Head>
        <title>Catfishly - Your Catfish Farming Assistant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <script id="cgpt-script-chunky" data-handle="catfishly01" src="https://app.getchunky.io/app/chatUI-web/loader.js"></script> */}
      </Head>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-white py-8 px-4 md:flex gap-3 justify-center items-center">

          <Image
            src={'/catfishly.png'}
            width={50}
            height={50}
            className='mx-auto md:mx-0'
          />
          <h1 className="text-3xl font-bold text-center text-aquamarine-500">I&apos;m Catfishly, your catfish farming assistant. Ask me anything.</h1>

        </header>

        {/* Main content */}
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            {/* FAQ section */}
            <Accordion alwaysOpen={true}>

              {faqItems.map((item, index) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title>{item.question} </Accordion.Title>
                  <Accordion.Content>
                    <p className="text-gray-700">{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}

            </Accordion>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black py-4 px-4 text-white text-center">
          <p className="text-sm">Catfishly@{currentYear}</p>
        </footer>

        <script id="cgpt-script-chunky" data-handle="catfishly01" src="https://app.getchunky.io/app/chatUI-web/loader.js"></script>
      </div>
    </Fragment>
  );
}

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-(--background) text-(--foreground)">
        <section className="px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                Terms And Conditions
              </div>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                Terms And Conditions
              </h1>
            </div>

            <div className="mt-12 rounded-4xl border border-slate-200/80 bg-white p-8 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.16)] sm:p-10">
              <div className="space-y-6 text-lg text-slate-700">
                <p>
                  Welcome to Right Haven for Care. By accessing and using this
                  website (www.righthavenforcare.co.uk), you agree to comply
                  with and be bound by the following Terms and Conditions.
                  Please review them carefully. If you do not agree with these
                  terms, you should not use this website or our services.
                </p>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    1. Introduction
                  </h3>
                  <p>
                    Right Haven for Care {`("we", "us", or "our")`} provides
                    domiciliary care services, including but not limited to
                    personal care, assistance with daily living, and home care
                    support. These Terms and Conditions govern your use of our
                    website and the services we provide.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    2. Services
                  </h3>
                  <p>
                    Right Haven for Care provides domiciliary care services as
                    outlined on our website. We strive to deliver these services
                    in a professional and caring manner. Specific terms related
                    to the provision of care services, such as care agreements,
                    fees, and responsibilities, will be detailed in the
                    individual contracts with our clients.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    3. Use of Website
                  </h3>
                  <ul className="list-disc space-y-2 px-8">
                    <li>
                      The content provided on this website is for general
                      informational purposes only. While we strive to ensure
                      that the information is accurate, we make no guarantees
                      regarding the completeness, accuracy, or reliability of
                      any content.
                    </li>
                    <li>
                      You agree to use this website only for lawful purposes and
                      in a manner that does not infringe the rights of,
                      restrict, or inhibit anyone {`else's`} use of the website.
                    </li>
                    <li>
                      We reserve the right to modify, suspend, or discontinue
                      any part of the website or services without prior notice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    4. Intellectual Property
                  </h3>
                  <ul className="list-disc space-y-2 px-8">
                    <li>
                      All content on this website, including but not limited to
                      text, images, graphics, logos, and software, is the
                      property of Right Haven for Care or its content providers
                      and is protected by applicable intellectual property laws.
                    </li>
                    <li>
                      You may not reproduce, distribute, modify, or otherwise
                      use any content from this website without our prior
                      written permission.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    5. Third-Party Links
                  </h3>
                  <p>
                    Our website may contain links to third-party websites or
                    services that are not owned or controlled by Right Haven for
                    Care. We are not responsible for the content, privacy
                    policies, or practices of any third-party websites. You
                    access such websites at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    6. User Accounts
                  </h3>
                  <ul className="list-disc space-y-2 px-8">
                    <li>
                      In some instances, you may be required to create an
                      account to access certain features of our website. You
                      agree to provide accurate and complete information when
                      creating your account.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your account and password and for all activities that
                      occur under your account.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    7. Privacy
                  </h3>
                  <p>
                    Your privacy is important to us. Please refer to our Privacy
                    Policy for details on how we collect, use, and protect your
                    personal information.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    8. Limitation of Liability
                  </h3>
                  <ul className="list-disc space-y-2 px-8">
                    <li>
                      Right Haven for Care will not be liable for any direct,
                      indirect, incidental, special, or consequential damages
                      arising out of or in connection with the use of our
                      website or services.
                    </li>
                    <li>
                      We do not guarantee that our website will be available at
                      all times or free from errors, and we accept no
                      responsibility for any loss or damage arising from the
                      website being unavailable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    9. Termination
                  </h3>
                  <p>
                    We reserve the right to terminate or suspend your access to
                    the website or services at any time, without notice, for
                    conduct that we believe violates these Terms and Conditions
                    or is harmful to other users of the website or us.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    10. Changes to Terms
                  </h3>
                  <p>
                    We may update these Terms and Conditions from time to time.
                    Any changes will be posted on this page, and by continuing
                    to use our website or services after the changes are made,
                    you agree to be bound by the revised terms.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    11. Governing Law
                  </h3>
                  <p>
                    These Terms and Conditions shall be governed by and
                    construed in accordance with the laws of England and Wales,
                    without regard to its conflict of law provisions. Any
                    disputes arising out of or relating to these terms shall be
                    subject to the exclusive jurisdiction of the courts of
                    England and Wales.
                  </p>
                </div>

                <div>
                  <h3 className="py-4 text-2xl font-semibold text-teal-600">
                    12. Contact Information
                  </h3>
                  <p>
                    If you have any questions about these Terms and Conditions,
                    please contact us at:
                  </p>
                  <div className="px-8 py-4">
                    <h4 className="font-semibold text-slate-900">
                      Right Haven for Care Ltd
                    </h4>
                    <p className="pt-4">Email: info@righthavenforcare.co.uk</p>
                    <p>Phone: 01322 924922</p>
                    <p>
                      Address: 32A Admirals Park, Victoria Way, Dartford, DA2
                      6QD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

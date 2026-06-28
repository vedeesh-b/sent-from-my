export default function Terms() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-gray-900 mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 28, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          About Sent From My
        </h2>
        <p className="text-gray-500">
          Sent From My is a Gmail Add-On that automatically rotates your email
          signature every hour. It runs on Google Apps Script and interacts with
          your Gmail account only to update your signature settings. By
          installing and using the add-on, you agree to these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Acceptable Use
        </h2>
        <p className="text-gray-500 mb-3">
          You agree to use Sent From My only for its intended purpose —
          personalising your Gmail signature. You must not:
        </p>
        <ul className="list-disc list-inside text-gray-500 space-y-2">
          <li>
            Attempt to reverse-engineer, modify, or distribute the add-on.
          </li>
          <li>
            Use the add-on in any way that violates Google's Terms of Service.
          </li>
          <li>Use the add-on for any unlawful or harmful purpose.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Google Account Access
        </h2>
        <p className="text-gray-500">
          The add-on requests permission to modify your Gmail signature
          settings. You grant this permission voluntarily during installation
          and can revoke it at any time via your Google Account settings. We
          will only use this permission to update your signature, as described
          in our{" "}
          <a
            href="/privacy"
            className="text-sky-700 underline underline-offset-2"
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">No Warranty</h2>
        <p className="text-gray-500">
          Sent From My is provided "as is", without warranty of any kind,
          express or implied. We make no guarantees that the add-on will be
          uninterrupted, error-free, or that your signature will update at
          exactly the scheduled time. Gmail API availability and Google Apps
          Script quotas are outside our control.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Limitation of Liability
        </h2>
        <p className="text-gray-500">
          To the fullest extent permitted by applicable law, Sent From My and
          its developer shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of or
          inability to use the add-on. This includes, but is not limited to, any
          unintended changes to your Gmail signature.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Third-Party Services
        </h2>
        <p className="text-gray-500">
          The add-on runs on Google's infrastructure and is subject to Google's
          own Terms of Service. We are not affiliated with or endorsed by
          Google. Any disruption to Google Workspace or Apps Script may affect
          the add-on's functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Changes to These Terms
        </h2>
        <p className="text-gray-500">
          We may update these terms from time to time. When we do, we'll update
          the date at the top of this page. Continued use of the add-on after a
          change is posted means you accept the revised terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">Contact</h2>
        <p className="text-gray-500">
          Questions about these terms? Fill in the contact form and I'll get
          back to you.
        </p>
      </section>
    </article>
  );
}

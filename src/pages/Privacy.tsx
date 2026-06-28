export default function Privacy() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-gray-900 mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 28, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">Overview</h2>
        <p className="text-gray-500">
          Sent From My is a Gmail Add-On built entirely on Google Apps Script.
          It rotates your Gmail signature automatically every hour using a set
          of themes you configure. This policy explains what data the add-on
          accesses, why, and what happens to it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          What We Access
        </h2>
        <p className="text-gray-500 mb-3">
          To function, the add-on requests the following Google OAuth scope:
        </p>
        <ul className="list-disc list-inside text-gray-500 space-y-2 mb-3">
          <li>
            <code className="text-sm bg-gray-100 px-1 rounded">
              https://www.googleapis.com/auth/gmail.settings.basic
            </code>{" "}
            — to read and update your Gmail signature settings.
          </li>
        </ul>
        <p className="text-gray-500">
          No other Gmail data — including message content, contacts, or
          attachments — is accessed or read.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          What We Do Not Collect
        </h2>
        <p className="text-gray-500">
          Sent From My does not collect, store, or transmit any personal data to
          external servers. There are no external servers. The add-on runs
          entirely within Google's infrastructure via Apps Script. Your Google
          Account details, email content, and signature data never leave
          Google's systems.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          How Your Data Is Used
        </h2>
        <p className="text-gray-500">
          The Gmail signature scope is used solely to write a new signature to
          your account on an hourly basis. The add-on reads the current time to
          select a theme, constructs a plain-text or HTML signature string, and
          calls the Gmail Settings API to apply it. Nothing else.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">Data Sharing</h2>
        <p className="text-gray-500">
          Your data is not sold, rented, or shared with any third parties —
          ever. Because nothing is stored outside of Google, there is nothing to
          share.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Google API Services User Data Policy
        </h2>
        <p className="text-gray-500">
          Sent From My's use of information received from Google APIs adheres to
          the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="text-sky-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Data obtained via Google
          APIs is used only to provide the signature-rotation feature described
          above and for no other purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Revoking Access
        </h2>
        <p className="text-gray-500">
          You can revoke the add-on's access to your Google Account at any time
          by visiting{" "}
          <a
            href="https://myaccount.google.com/permissions"
            className="text-sky-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            myaccount.google.com/permissions
          </a>{" "}
          and removing Sent From My. Uninstalling the add-on from Gmail also
          removes all associated permissions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">
          Changes to This Policy
        </h2>
        <p className="text-gray-500">
          If this policy changes in a meaningful way, we'll update the date at
          the top of this page. We won't retroactively change how existing data
          is used because we don't store any to begin with.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-3">Contact</h2>
        <p className="text-gray-500">
          Questions about this policy? Fill in the contact form and I'll get
          back to you.
        </p>
      </section>
    </article>
  );
}

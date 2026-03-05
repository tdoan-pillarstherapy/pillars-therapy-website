export default function Mailbox() {
  return (
    <div className="mailbox-wrapper" id="mailbox" aria-hidden="true">
      <img
        src="/assets/postbox-illustration.png"
        alt="Elderly couple posting a letter in a mailbox"
        className="mailbox-img"
        draggable={false}
      />
    </div>
  )
}

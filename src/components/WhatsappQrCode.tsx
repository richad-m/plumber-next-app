import React from "react";
import Image from "next/image";
import qrcode from "../../assets/whatsapp-qr-code.png";

function WhatsappQrCode() {
  return (
    <div className="qr-code-container m-auto">
      <div className="qr-code-content-container">
        <h3 className="font-bold">Les Artisans Dépanneurs Plomberie</h3>
        <p className="text-center">
          Démarrez une conversation avec un plombier en scannant ce QR CODE
        </p>
        <Image
          src={qrcode}
          alt="qr-code-whatsapp"
          width={200}
          height={200}
          className="carrousel-item"
        />
      </div>
    </div>
  );
}

export default WhatsappQrCode;

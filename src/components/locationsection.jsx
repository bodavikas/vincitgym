
import React from "react";
import {
  siteConfig,
  directionsUrl,
  whatsappUrl,
} from "../config/siteConfig";

export default function LocationSection() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        <div className="location-heading">
          <p className="location-eyebrow">FIND YOUR GYM</p>

          <h2>
            YOUR NEXT <span>LEVEL</span> STARTS HERE.
          </h2>

          <p className="location-description">
            Visit VINCIT FITNESS and take the next step
            towards your fitness goals.
          </p>
        </div>

        <div className="location-card">
          <div className="location-map">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              title="VINCIT FITNESS location map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="location-info">
            <p className="location-label">OUR LOCATION</p>

            <h3>{siteConfig.brand}</h3>

            <p>{siteConfig.gymAddress}</p>

            <div className="location-actions">
              <a
                className="location-button primary"
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                GET DIRECTIONS <span>↗</span>
              </a>

              <a
                className="location-button secondary"
                href={whatsappUrl(
                  "Hi VINCIT FITNESS! I want to enquire about memberships."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP US <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-section {
          background: #080808;
          color: #ffffff;
          padding: 90px 5%;
        }

        .location-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .location-heading {
          margin-bottom: 35px;
        }

        .location-eyebrow,
        .location-label {
          color: #a3a3a3;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .location-heading h2 {
          font-size: clamp(30px, 5vw, 58px);
          line-height: 1.1;
          font-weight: 800;
          margin: 16px 0;
        }

        .location-heading h2 span {
          color: #bdbdbd;
        }

        .location-description {
          color: #a3a3a3;
          line-height: 1.7;
        }

        .location-card {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          overflow: hidden;
          border: 1px solid #292929;
          border-radius: 22px;
          background: #111111;
        }

        .location-map {
          min-height: 400px;
          background: #eeeeee;
        }

        .location-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(25px, 4vw, 50px);
        }

        .location-info h3 {
          font-size: 28px;
          margin: 12px 0;
        }

        .location-info > p:not(.location-label) {
          color: #a3a3a3;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .location-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .location-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 15px 18px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.5px;
          transition: background 0.2s ease;
        }

        .location-button.primary {
          background: #ffffff;
          color: #080808;
        }

        .location-button.primary:hover {
          background: #d8d8d8;
        }

        .location-button.secondary {
          background: #222222;
          color: #ffffff;
          border: 1px solid #393939;
        }

        .location-button.secondary:hover {
          background: #333333;
        }

        @media (max-width: 800px) {
          .location-section {
            padding: 60px 5%;
          }

          .location-card {
            grid-template-columns: 1fr;
          }

          .location-map {
            min-height: 320px;
          }

          .location-actions {
            flex-direction: column;
          }

          .location-button {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
}

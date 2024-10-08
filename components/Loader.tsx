export const SequentialDotsLoader = () => (
    <div className="flex justify-center items-center space-x-1">
      <span className="dot animate-bounce" style={{ animationDelay: "0s" }}>.</span>
      <span className="dot animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
      <span className="dot animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
      <style jsx>{`
        .dot {
          font-size: 24px;
          color: inherit; /* Matches the font color */
          animation-duration: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
export default function Badge({ text, color = "green" }) {
    return (
      <span className={`text-${color}-400 text-sm`}>
        ● {text}
      </span>
    );
  }

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import Toast from "@/common/toasts/components/toast/Toast";
import { useToastsContext } from "@/common/hooks/useToastsContext";
import "@/common/toasts/components/toastProvider/style.scss";

export default function ToastsProvider() {
  const { toasts } = useToastsContext();
  const toastsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [offsets, setOffsets] = useState<number[]>([]);

  useEffect(() => {
    const newOffsets: number[] = [];
    let currentOffset = 0;

    toastsRef.current.forEach((item, index) => {
      if (item) {
        newOffsets[index] = currentOffset;
        currentOffset += item.offsetHeight - 5;
      }
    });

    setOffsets(newOffsets);
  }, [toasts]);

  return createPortal(
    <div className="toasts-provider__container">
      {toasts.map((toast, index) => (
        <div
          className="toasts-provider__wrapper"
          key={toast.id}
          ref={(elem) => {
            toastsRef.current[index] = elem;
          }}
          style={{
            top: `${offsets[index] || 0}px`,
            zIndex: -(offsets[index] || 0)
          }}
        >
          <Toast
            message={toast.message}
            id={toast.id}
            type={toast.type}
          />
        </div>
      ))}
    </div>,
    document.getElementById('root')!
  );
}
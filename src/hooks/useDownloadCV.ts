import { useRef, useState } from "react";

interface UseDownloadCVOptions {
  fileUrl: string;
  fileName?: string;
}

export const useDownloadCV = ({
  fileUrl,
  fileName = "CV.pdf",
}: UseDownloadCVOptions) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const downloadCV = async () => {
    if (loading) return;

    if (!fileUrl) {
      setError("Lien de téléchargement invalide");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      abortControllerRef.current = new AbortController();

      const response = await fetch(fileUrl, {
        method: "GET",
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error("Téléchargement impossible");
      }

      const blob = await response.blob();

      // 🔐 Sécurité : forcer type PDF si nécessaire
      if (blob.type && !blob.type.includes("pdf")) {
        throw new Error("Format de fichier non autorisé");
      }

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-hidden", "true");

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
      setLoading(false);

    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error(err);
        setError("Une erreur est survenue lors du téléchargement");
      }
      setLoading(false);
    }
  };

  const cancelDownload = () => {
    abortControllerRef.current?.abort();
    setLoading(false);
  };

  return {
    downloadCV,
    cancelDownload,
    loading,
    error,
    ariaBusy: loading,
  };
};

import { useEffect, useRef, useState } from "react";
type Props = {
  formId: string;
  formMarkup: string;
};

export default function ContactForm7({ formId, formMarkup }: Props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // formのDOＭを取得
  const formWrapperRef = useRef<HTMLDivElement>(null);
  //formIdとformWrapperRefの変更を検知しコールバック関数を実行
  useEffect(() => {
    // formのDOＭが存在する場合
    if (formWrapperRef?.current) {
      // formタグを取得
      const formElement = formWrapperRef.current.getElementsByTagName("form")?.[0];
      // formタグに対してイベントを設定
      if (formElement) {
        const handleSubmit = async (e: SubmitEvent) => {
          // デフォルトのsubmitイベントをキャンセル
          e.preventDefault();

          const formData = new FormData(e.currentTarget as any);

          try {
            const response = await fetch(`${import.meta.env.PUBLIC_PROTOCOL}${import.meta.env.PUBLIC_WP_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, {
              method: "POST",
              body: formData,
            });

            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Error ${response.status}: ${errorText}`);
            }
            setShowSuccessMessage(true);
            setErrorMessage(null);
          } catch (error) {
            console.error("Form submission error", error);
            setErrorMessage("送信に失敗しました。もう一度お試しください。");
          }
        };
        // formタグに対してオリジナルイベントを設定
        formElement.addEventListener("submit", handleSubmit);
        //クリーンアップ関数
        return () => {
          formElement.removeEventListener("submit", handleSubmit);
        };
      }
    }
  }, [formId, formWrapperRef]);

  return showSuccessMessage ? <div className="bg-green-600 p-4 text-white font-bold">送信完了しました。</div> : <div className="max-w-[--content-size] mx-auto" ref={formWrapperRef} dangerouslySetInnerHTML={{ __html: formMarkup }} />;
}

import { useState } from "react";

export const useRegisterForm = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    const [emailError, setEmailError] = useState<string>("");

    // Validasi email berakhiran .com
    const handleEmailBlur = () => {
        if (email && !email.endsWith(".com")) {
            setEmailError("Email must be  ended with @gmail.com");
        } else {
            setEmailError("");
        }
    }

    const handleEmailChange = (text: string) => {
        setEmail(text);
        if (text.endsWith(".com")) {
            setEmailError(""); // Hapus error secara real-time jika sudah valid
        }
    };

    const handleSubmit = () => {
        if (!email.endsWith(".com")) {
            setEmailError("Email harus diakhiri dengan .com");
            return false;
        }
        
        // Jika valid, kembalikan data atau proses pendaftaran
        const formData = { name, email, date };
        console.log("Data siap di-submit:", formData);
        return formData;
    };

    return {
        name,
        setName,
        email,
        emailError,
        date,
        setDate,
        handleEmailChange,
        handleEmailBlur,
        handleSubmit
    };
}
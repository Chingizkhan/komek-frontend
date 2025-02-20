export function formatPhoneInput(value) {
    let cleaned = value.replace(/\D/g, ""); // Удаляем нечисловые символы

    // Если начинается с 8, заменяем на 7
    if (cleaned.startsWith("8")) {
        cleaned = "7" + cleaned.slice(1);
    }

    // Если не начинается с 7, добавляем его
    if (!cleaned.startsWith("7")) {
        cleaned = "7" + cleaned;
    }

    // Ограничиваем длину 11 символами
    cleaned = cleaned.slice(0, 11);

    // Форматируем
    let formatted = "+7";
    if (cleaned.length > 1) formatted += ` (${cleaned.slice(1, 4)}`;
    if (cleaned.length > 4) formatted += `) ${cleaned.slice(4, 7)}`;
    if (cleaned.length > 7) formatted += `-${cleaned.slice(7, 9)}`;
    if (cleaned.length > 9) formatted += `-${cleaned.slice(9, 11)}`;

    return formatted;
}

export function normalizePhoneNumber(phone: string) {
    return phone.replace(/\D/g, ""); // Удаляем все нечисловые символы
}
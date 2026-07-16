class AQOIEvaluator {
    // Normaliza string limpando acentuações, caracteres especiais e espaços extras
    static normalizeString(str) {
        if (!str) return "";
        return str.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .replace(/[^\w\s]/gi, '')        // Remove caracteres especiais
            .replace(/\s+/g, ' ')            // Colapsa espaços duplicados
            .trim();
    }

    // Compara o texto do militar com as palavras-chave do gabarito oficial
    static evaluateAnswer(userAnswer, keywords) {
        if (!userAnswer || userAnswer.trim().length < 5 || !keywords || keywords.length === 0) {
            return 0;
        }

        const userClean = this.normalizeString(userAnswer);
        let matches = 0;

        keywords.forEach(keyword => {
            const keywordClean = this.normalizeString(keyword);
            if (userClean.includes(keywordClean)) {
                matches++;
            } else {
                // Se for composto, analisa a presença das palavras individuais (fallback de proximidade)
                const subWords = keywordClean.split(' ').filter(w => w.length > 2);
                if (subWords.length > 1) {
                    const matchedSubWords = subWords.reduce((acc, word) => acc + (userClean.includes(word) ? 1 : 0), 0);
                    matches += (matchedSubWords / subWords.length) * 0.6; // Peso reduzido para correspondência parcial
                }
            }
        });

        const scorePercentage = Math.round((matches / keywords.length) * 100);
        return Math.min(Math.max(scorePercentage, 0), 100); // Garante limite entre 0 e 100
    }
}

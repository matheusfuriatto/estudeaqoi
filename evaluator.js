class AQOIEvaluator {
    static normalizeString(str) {
        if (!str) return "";
        return str.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

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
                const subWords = keywordClean.split(' ').filter(w => w.length > 2);
                if (subWords.length > 1) {
                    const matchedSubWords = subWords.reduce((acc, word) => acc + (userClean.includes(word) ? 1 : 0), 0);
                    matches += (matchedSubWords / subWords.length) * 0.6;
                }
            }
        });

        const scorePercentage = Math.round((matches / keywords.length) * 100);
        return Math.min(Math.max(scorePercentage, 0), 100);
    }
}

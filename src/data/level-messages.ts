export type StudentLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Instructor motivational messages by student level (Appendix A).
 * Each level contains two Egyptian Arabic message variants.
 * I’m not Egyptian, so I used ChatGPT to translate my sentences into Egyptian Arabic. Please don’t hold it against me if there are any mistakes in the dialect😅😅 
 */
export const levelMessages: Record<StudentLevel, [string, string]> = {
  1: [
    "فين المجهود يا صديقي؟ 😅 أنت لسه أحسن من {percent}% بس من باقي الطلبة.. مش ده مستواك. افتح الدرس الجاي دلوقتي وخلّينا نشوف حاجة تانية!",
    "بصراحة؟ أداءك لسه محتاج شغل.. أنت أحسن من {percent}% من الطلبة بس. ابدأ بدرس واحد النهاردة ومتستناش المزاج 💪",
  ],
  2: [
    "بداية كويسة يا صديقي 🙂 أنت أحسن من {percent}% من باقي الطلبة.. لسه قدامك طريق، كمّل ومتقفش.",
    "ماشي في السكة الصح بس محتاج شوية سرعة.. أداءك أفضل من {percent}% من الطلبة. ركّز في الدروس الجاية 👍",
  ],
  3: [
    "كده تمام 👍 أداءك أفضل من {percent}% من باقي الطلبة.. شوية تركيز كمان وهتدخل المنافسة.",
    "في النص بالظبط يا صديقي.. أنت أحسن من {percent}% من الطلبة. الفرق بين النص والقمة هو الاستمرار 💪",
  ],
  4: [
    "عظيم يا صديقي.. أداءك في الكورس ده أفضل من {percent}% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا 💪",
    "برافو عليك 👏 أنت أحسن من {percent}% من الطلبة.. كمان خطوتين وتبقى في الصدارة.",
  ],
  5: [
    "أسطورة! 🔥 أنت أفضل من {percent}% من باقي الطلبة.. حافظ على مكانك ومتسيبش حد ياخده منك.",
    "ده مستوى المحترفين يا صديقي 🏆 أداءك أفضل من {percent}% من الطلبة.. كمّل وخلّي اسمك أول اسم في الليدر بورد.",
  ],
};

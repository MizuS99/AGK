document.addEventListener("DOMContentLoaded", function () {
    const startYear = 2025; // 固定開始年
    const currentYear = new Date().getFullYear(); // 現在の年を取得
  
    // もし現在の年が2025より大きければ「2025～202X」と表示、それ以外は「2025」
    const yearText = (currentYear > startYear) ? `${startYear}～${currentYear}` : `${startYear}`;
    
    document.getElementById("year-range").textContent = yearText;
  });
  
document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  const updateDateTime = () => {
    const now = new Date();
    const options = { weekday: "long" };
    const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(now);

    currentTimeUTC.textContent = `Current Time (UTC): ${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
    currentDay.textContent = `Current Day: ${dayOfWeek}`;
  };

  updateDateTime();
  setInterval(updateDateTime, 1000);
});

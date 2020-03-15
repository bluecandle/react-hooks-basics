export const useNotification = (title, options) => {
    if (!("Notification" in window)) { // window notification 에 접근해야 사용이 가능하기 때문에, 먼저 확인.
      return;
    }
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNotif;
  };
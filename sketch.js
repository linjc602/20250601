// ...existing code...
function draw() {
  image(video, 0, 0);

  // Ensure at least one hand is detected
  if (hands.length > 0) {
    for (let hand of hands) {
      if (hand.confidence > 0.1) {
        // 只留下拇指末端(4)和食指末端(8)
        let thumbTip = hand.keypoints[4];
        let indexTip = hand.keypoints[8];

        // 畫出拇指末端
        if (thumbTip) {
          if (hand.handedness == "Left") {
            fill(255, 0, 255);
          } else {
            fill(255, 255, 0);
          }
          noStroke();
          circle(thumbTip.x, thumbTip.y, 16);
        }

        // 畫出食指末端
        if (indexTip) {
          if (hand.handedness == "Left") {
            fill(255, 0, 255);
          } else {
            fill(255, 255, 0);
          }
          noStroke();
          circle(indexTip.x, indexTip.y, 16);
        }

        // 兩者都偵測到時，畫線
        if (thumbTip && indexTip) {
          stroke(0, 255, 0);
          strokeWeight(4);
          line(thumbTip.x, thumbTip.y, indexTip.x, indexTip.y);
        }
      }
    }
  }
}
// ...existing code...

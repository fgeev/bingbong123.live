async function downloadLevelFromID(levelParam) {
    // levelParam looks like: "2f01egcq3t0a3sak310m8:1777392688"
    const [id, timestamp] = levelParam.split(":");

    const fileUrl = `https://grab-images.slin.dev/level_${id}_${timestamp}_1.level`;

    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${id}.level`;

    document.body.appendChild(a);
    a.click();
    a.remove();
}

function fibonacci(n) {
  let fibSequence = [0, 1];

  console.log(`[ ${fibSequence[0]} ]`);

  for (let i = 1; i < n; i++) {
    const next = fibSequence[i - 1] + fibSequence[i];
    if (next > 55) break;
    fibSequence.push(next);
    console.log(`[ ${fibSequence.join(", ")} ]`);
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

function rangeofNums(start, end){
    if(end < start){
      return [];
    }
    return [start, ...rangeofNums(start + 1 , end)];
}

console.log(rangeofNums(-2, 0))
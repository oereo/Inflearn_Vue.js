<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit = "onSubmitForm"> 
            <input ref = "answer" minlength = "4" maxlength = "4" v-model = "value" />
            <button type = "submit">입력</button>
        </form>
    
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for = "t in tries" v-bind:key = "t">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
const getNumbers = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4; i +=1){
        const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
  data() {
      return {
          answer : getNumbers(), // 배열형식으로 자료형 : array , ex) [1,5,3,4,]
          tries: [], // 시도수
          value: '', // 입력
          result: '', // 결과
      }
  },
  methods: {
      onSubmitForm(e) {
          e.preventDefault();
          if(this.value === this.answer.join('')){
            this.tries.push({
              try: this.value,
              result : '홈런',
              });
              this.result = '홈런'
              alert('게임을 다시 시작합니다.');
              this.answer = getNumbers();
              this.value = '';
              this.tries = [];
              this.$refs.answer.focus();

              }else{ // 횟수를 10번 초과하여 틀렸을 때
                  if(this.tries.length>=9){
                    this.result = `10번을 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다.`
                    alert('게임을 다시 시작합니다.');
                    this.value = '';
                    this.tries = [];
                    this.$refs.answer.focus();
                  }
                  let strike = 0;
                  let ball = 0;
                  const answerArray = this.value.split('').map(v => parseInt(v));
                    for(let i = 0; i<4; i+=1){ // 자릿수 체크 부분 strike와 ball의 갯수 자릿수정답을 알려주는 부분
                        if(answerArray[i] === this.answer[i]){
                            strike++;
                        }
                        else if(this.answer.includes(answerArray[i])){
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다`
                    });
                    this.value = '';
          this.$refs.answer.focus();
                }
          
      }
  } 
};
</script>

<style>

</style>
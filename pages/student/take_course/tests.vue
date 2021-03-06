<template>
  <div>
    <HeaderBar
      v-if="!correct"
      :title="this.$store.state.courses.current.titulo"
      :route="`/aluno/curso/${slug}`"
    ></HeaderBar>
    <div v-if="loading">
      <div class="container-spinner">
        <v-progress-circular
          :size="70"
          :width="5"
          indeterminate
          color="#6600cc"
        />
      </div>
    </div>
    <div v-else-if="correct">
      <div class="bg__fire">
        <v-icon id="close__btn" color="primary" @click="resetBadgeAndContinue"
          >mdi-close-circle</v-icon
        >

        <div class="notification">
          <img
            v-if="tryMessage === 'De \n primeira!!'"
            class="notification__image"
            :src="require('~/assets/badge-first.png')"
            alt=""
          />
          <img
            v-if="tryMessage === 'Na \n segunda!'"
            class="notification__image"
            :src="require('~/assets/badge-second.png')"
            alt=""
          />
          <img
            v-if="tryMessage === 'Na \n terceira!'"
            class="notification__image"
            :src="require('~/assets/badge-third.png')"
            alt=""
          />
          <img
            v-if="tryMessage === 'Na \n última!'"
            class="notification__image"
            :src="require('~/assets/badge-fourth.png')"
            alt=""
          />
        </div>
        <div class="messages pb-5">
          <h1 class="message">
            {{ headerNotification }}
          </h1>
          <p class="message__subtext">
            {{ textNotification }}
          </p>
        </div>
      </div>

      <div class="share__achievement">
        <p>Compartilhe com seus amigos</p>
        <div>
          <div class="icons">
            <button
              class="btn-block btn-primary"
              @click="share($event, title, image)"
            >
              COMPARTILHAR
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="inner-container">
      <h3>{{ test.titulo || 'Título do Teste' }}</h3>
      <h4 class="mt-5">
        {{ test.pergunta || 'Enunciado do teste' }}
      </h4>

      <v-radio-group v-model="selected" class="mt-12">
        <v-radio value="A">
          <template #label>
            <div><span>A:</span> {{ test.primeira_alternativa }}</div>
          </template>
        </v-radio>

        <v-radio value="B">
          <template #label>
            <div><span>B:</span> {{ test.segunda_alternativa }}</div>
          </template>
        </v-radio>

        <v-radio value="C">
          <template #label>
            <div><span>C:</span> {{ test.terceira_alternativa }}</div>
          </template>
        </v-radio>

        <v-radio value="D">
          <template #label>
            <div><span>D:</span> {{ test.quarta_alternativa }}</div>
          </template>
        </v-radio>
      </v-radio-group>

      <div class="base">
        <v-btn
          :class="'btn-block btn-primary btn-fixed ' + error"
          @click="nextTest"
        >
          Próximo
        </v-btn>
      </div>
    </div>
    <navigation-bar v-if="!correct" />
  </div>
</template>

<router>
  {
    path: '/aluno/curso/:courseSlug/aula/teste'
  }
</router>

<script>
import NavigationBar from '~/components/NavigationBar';
import tests from '~/services/http/generic';
import http from '~/services/http/generic';
import HeaderBar from '~/components/Header.vue';

export default {
  components: {
    NavigationBar,
    HeaderBar,
  },
  data: () => ({
    selected: '',
    correct: false,
    loading: true,
    try: 1,
    hasthtag: '',
    badgePoints: 0,
    tryMessage: '',
    headerNotification: '',
    textNotification: '',
    error: '',
  }),
  computed: {
    test() {
      return this.$store.state.courses.currentTest;
    },
    idUser() {
      return this.$store.state.user.data.id;
    },
    user() {
      return this.$store.state.user.data;
    },
    courseId() {
      return this.$store.state.courses.current.id;
    },
    slug() {
      return this.$route.params.courseSlug;
    },
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    resetBadgeAndContinue() {
      this.badgePoints = 0;
      this.try = 1;
      this.correct = false;
      this.advanceCourse();
    },
    nextTest() {
      if (this.selected !== '') {
        // Primeiro passo é verificar se a resposta está correta
        tests
          .post(`${process.env.endpoints.TEST}${this.test.id}/check-test`, {
            chosenAlternative: this.selected,
          })
          .then(res => {
            if (res.data.isCorrect === true) {
              this.getPointsAndNotificate();
            } else if (res.data.isCorrect === false) {
              if (this.try < 4) {
                this.try++;
              }
              this.selected = '';

              this.error = 'error-form';
              setTimeout(() => {
                this.error = '';
              }, 300);
            } else {
              this.$notifier.showMessage({
                type: 'error',
                message: 'Má conexão',
              });
            }
          });
      } else {
        this.error = 'error-form';
        setTimeout(() => {
          this.error = '';
        }, 300);
      }
    },
    getPointsAndNotificate() {
      const points = {
        1: 10,
        2: 5,
        3: 2,
        4: 1,
      };
      const trymessage = {
        1: 'De \n primeira!!',
        2: 'Na \n segunda!',
        3: 'Na \n terceira!',
        4: 'Na \n última!',
      };
      const headerMessage = {
        1: 'Mandou Bem!',
        2: 'Nossa, foi por pouco!',
        3: 'Continue Estudando!',
        4: 'Não desista!',
      };
      const bodyMessage = {
        1: 'Parabéns por acertar de primeira, você vai longe!',
        2: 'Você quase acertou de primeira, continue estudando, você está quase lá.',
        3: 'Você acertou na terceira tentativa, agora é pegar mais firme nos estudos para acertar de primeira!',
        4: 'Você é um guerreiro(a), dedique mais tempo aos estudos e tire suas dúvidas, você é capaz de ir longe.',
      };

      this.badgePoints = points[this.try];
      this.tryMessage = trymessage[this.try];
      this.hasthtag = this.tryMessage.split('\n').join('');
      this.headerNotification = headerMessage[this.try];
      this.textNotification = bodyMessage[this.try];
      this.correct = true;
    },
    onSuccess(result) {
      console.log('Shared to app: ' + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
      console.log(result); // On Android apps mostly return false even while it's true
    },
    onError(msg) {
      alert('Sharing failed with message: ' + msg);
    },
    share(event, title, image) {
      event.stopPropagation();
      event.preventDefault();
      const options = {
        message: 'Se liga nessa questão que eu acertei!', // not supported on some apps (Facebook, Instagram)
        subject: this.tryMessage, // fi. for email
        url: `http://newschool.us-east-2.elasticbeanstalk.com/#/cadastro/${this.user.inviteKey}`,
        chooserTitle: 'Vem colar com nois!', // Android only, you can override the default share sheet title
      };
      window.plugins.socialsharing.shareWithOptions(
        options,
        this.onSuccess,
        this.onError,
      );
    },
    async advanceCourse() {
      this.loading = true;
      // advancing course step
      await http.post(
        `${process.env.endpoints.ADVANCE_COURSE}/user/${this.idUser}/course/${this.courseId}`,
      );

      // case this course is not finished, go to next step
      const currentStep = await this.$store.dispatch(
        'courses/refreshCurrentStep',
      );

      if (currentStep.type === 'TEST') {
        // case current step still a test, continue tests on this page
        this.selected = '';
        this.loading = false;
      } else {
        // else, go to step url
        $nuxt._router.replace(currentStep.stepUrl);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 900;
  font-size: 1em;
  line-height: 36px;
  text-align: center;
  color: var(--primary);
}
@media screen and (max-width: 20.625em) {
  h1 {
    font-size: 14px;
  }
}
h3 {
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  color: #1a1a1a;
}
h4 {
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: justify;
  color: #1a1a1a;
}
.main-container {
  display: flex;
  flex-direction: column;
  padding: 0em 2rem 0rem;
}
.inner-container {
  margin: 1em 6px 0;
  padding: 0 0.5em !important;
}
::v-deep label {
  overflow: visible;
  width: 200px;
}
@mixin inner-text-checkbox {
  font-weight: 400;
  color: var(--primary);
  margin-right: 0.5em;
}
.mdi-close-circle::before {
  color: var(--primary);
  width: 20px;
  height: 20px;
  z-index: 9999999;
}
.notification {
  width: 193px;
  height: 193px;
  margin-top: 100px;
}
.bg__fire {
  position: absolute;
  padding: 0 20px;
  top: 0;
  background-image: url('../../../assets/background-fire.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
.base {
  position: absolute;
  bottom: 96px;
  width: 92%;
  margin: 0 auto;
}
.message {
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  color: black;
}
.message__subtext {
  margin-top: 2%;
  text-align: center;
  z-index: 9999;
  font-size: 16px;
  font-family: Roboto;
}
::v-deep .main-container {
  padding: 0 !important;
}
.share__achievement {
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 50px;
  width: 100%;
}
.icons {
  margin: 0 auto;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.notification__image {
  position: absolute;
  top: 70px;
  z-index: 999;
  height: 190px;
  width: auto;
  left: 50%;
  transform: translate(-50%);
}
::v-deep .theme--light.v-label {
  color: rgb(0, 0, 0) !important;
  font-weight: 600;
  font-size: 14px !important;
  font-family: 'Roboto';

  span {
    color: var(--primary);
    font-weight: 400;
  }
}
::v-deep .v-radio {
  margin-bottom: 17px !important;
}
::v-deep .mdi-checkbox-blank-outline::before {
  content: url('https://api.iconify.design/bi:circle.svg?height=16');
  vertical-align: -0.125em;
}
::v-deep .mdi-checkbox-marked::before {
  content: url('https://api.iconify.design/bi:check-circle-fill.svg?color=rgb(104%2C0%2C201)&height=16');
  vertical-align: -0.125em;
}
#close__btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
}
::v-deep .error--text {
  animation: none !important;
}
.error-form {
  animation: nono 300ms, intro paused;
}
</style>

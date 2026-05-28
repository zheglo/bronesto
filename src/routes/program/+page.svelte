<script lang="ts">
	import { animate, inView, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		inView('section', ({ target }) => {
			animate(
				target.querySelectorAll('#fly')!,
				{ x: ['-50%', '150%'] },
				{ delay: stagger(1), duration: 5, repeat: Infinity }
			);
			animate(
				target.querySelectorAll('#by')!,
				{ x: ['75%', '-75%'] },
				{ delay: stagger(1), duration: 5, repeat: Infinity }
			);
		});
	});
</script>

<section
	class="relative h-[100dvh] w-[100dvw] flex flex-col -mt-5% -z-1
  bg-cover bg-center"
	style="background-image: url('assets/program/greenTheaterYellow.png')"
>
	<div class="relative flex items-center pt-5% px-10">
		<h1 class="font-sans font-size-5vw italic font-900 text-blak pl-10%">oрекстр</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/Pakava.webp" alt="ship" />
		<h1 class="font-sans font-size-5vw italic font-900 text-blak">«Пакава Ить»</h1>
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1 class="font-sans font-size-7vw italic font-900 text-#e30614 pl-10% pr-10">группа</h1>
		<img class="w-20%" src="assets/program/ship.webp" alt="пакава ить" />
		<img class="w-40%" src="assets/program/shipLogo.svg" alt="ships logo" />
	</div>

	<div class="relative flex items-center -mt-15 px-10">
		<h1
			class="font-serif italic font-size-6vw font-300 text-#4b0082 opasity-70 tracking-widest pl-10%"
		>
			группа
		</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/sever.webp" alt="группа север" />
		<img class="w-40%" src="assets/program/nordLogo.svg" alt="sever logo" />
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1
			class="font-sans font-size-5vw italic font-900 text-black opasity-70 tracking-widest pl-10%"
		>
			группа
		</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/otzvuki.webp" alt="отзвуки му" />
		<h1 class="font-sans font-size-5vw italic font-900 text-black">«отЗВУКИ МУ»</h1>
	</div>

	<div class="relative flex items-center -pt-15% px-10">
		<h1 class="font-saerif font-size-5vw italic font-900 text-blak pl-10%">oрекстр</h1>
		<img
			class="self-center w-20% pl-3%"
			src="assets/program/Evgeny_Kalachev_by_HominiLupus.webp"
			alt="окестр жени калачёва"
		/>
		<h1 class="font-serif font-size-5vw italic font-600 text-blak ml-10">Жени Калачёва</h1>
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1 class="font-sans font-size-5vw italic font-900 text-black opasity-70 pl-10%">проект</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/purba.webp" alt="пурба" />
		<h1 class="font-sans font-size-5vw italic font-900 text-black">PURBA</h1>
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1 class="font-sans font-size-5vw font-200 text-black opasity-70 tracking-widest pl-10%">
			группа
		</h1>
		<img
			class="self-center w-20% pl-3% mr-10 -ml-10"
			src="assets/program/bostonskoe.webp"
			alt="бостонское чаепитие"
		/>
		<h1 class="font-sans font-size-5vw font-200 text-black leading-85%">
			«Бостонское<br />Чаепитие»
		</h1>
	</div>

	<div class="absolute w-100cqw mt-10%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>

	<div class="absolute w-100cqw mt-25%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-45%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-70%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
</section>

<section class="relative h-[100dvh] w-[100dvw] flex flex-col botton-0 -z-2">
	<div
		class="relative h-[100dvh] w-[100dvw] bg-cover bg-center"
		style="background-image: url('assets/program/greenTheaterYellow2.png')"
	></div>

	<div class="absolute w-100cqw mt-10%" id="by">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/jokeYellow.webp"
			alt="old lady flys"
		/>
	</div>

	<div class="absolute w-100cqw mt-25%" id="by">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/jokeYellow.webp"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-45%" id="by">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/jokeYellow.webp"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-60%" id="by">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/jokeYellow.webp"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-75%" id="by">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/jokeYellow.webp"
			alt="old lady flys"
		/>
	</div>
</section>


<section class="relative h-[100dvh] w-[100dvw] flex flex-col bg-#fcfdca bottom-0 -z-3">
 <h1 class="absolute bottom-25% font-sans font-size-3vw font-bold text-#800000 px-5% xl:font-size-2vw">
		праздничные мероприятия в ознаменование столетнего бессмертия чудесной старушки будут
		продолжаться до окончания года в разных прекрасных уголках нашей необъятной Родины в виде
		выставок, концертов, перформансов, театрализованных постановок и прочего, о чём вы сможете
		узнать из этого ресурса, к котому вскорости будут добавлены страницы с жизнеописанием героини и многочисленными образцами её художественного наследия
	</h1>

  <footer class="absolute flex inset-x-0 bottom-0 items-center justify-around block h-[25dvh] bg-black -z-10">
		<!-- <div class='w-25% -z-3'>
			<img src="assets/footer/br.svg" alt="logo">
		</div> -->



		<p class='font-size-1vw text-#fff'>© ЖЕГЛО 2024</p>
  </footer>
</section>


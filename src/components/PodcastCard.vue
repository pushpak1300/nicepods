<template>
	<ul class="flex space-x-2 items-center overflow-x-scroll">
		<li class="items-center flex flex-col space-y-0 w-1/3">
			<a href="#">
				<ion-img
					class="h-24 w-24 rounded-lg p-1"
					src="http://is4.mzstatic.com/image/thumb/Music71/v4/15/32/be/1532beba-7530-1ee9-6657-54349895d21d/source/600x600bb.jpg"
					alt="podcast-img"
				/>
			</a>
			<p class="text-gray-800 dark:text-gray-100 text-left font-semibold">
				Radio Leo
			</p>
			<p
				class="text-gray-600 dark:text-gray-200 dark:text-gray-200 text-left font-medium text-sm"
			>
				Leo Laporte
			</p>
		</li>
		<li class="items-center flex flex-col space-y-0 w-1/3">
			<a href="#">
				<ion-img
					class="h-24 w-24 rounded-lg p-1"
					src="http://is5.mzstatic.com/image/thumb/Music71/v4/42/d4/89/42d489b8-03c0-553b-99e8-7ad1b3930f21/source/600x600bb.jpg"
					alt="podcast-img"
				/>
			</a>
			<p class="text-gray-800 dark:text-gray-100 text-left font-semibold">
				V Vegas
			</p>
			<p class="text-gray-600 dark:text-gray-200 text-left font-medium text-sm">
				Scott Roeben
			</p>
		</li>
		<li class="items-center flex flex-col space-y-0 w-1/3">
			<a href="#">
				<ion-img
					class="h-24 w-24 rounded-lg p-1"
					src="http://is2.mzstatic.com/image/thumb/Music62/v4/89/a8/24/89a8249b-2aec-420d-9ce4-d0dc3ba4cc8b/source/600x600bb.jpg"
					alt="podcast-img"
				/>
			</a>
			<p class="text-gray-800 dark:text-gray-100 text-left font-semibold">
				Fire in Hole
			</p>
			<p class="text-gray-600 dark:text-gray-200 text-left font-medium text-sm">
				Richard & Jason
			</p>
		</li>
	</ul>
</template>

<script>
import { IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "PodcastCard",
	components: {
		IonImg,
	},
});
</script>

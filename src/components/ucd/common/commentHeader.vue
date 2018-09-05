<template>
	<div class="commentheader">
		<div class="statusBox">
			<div class="main">
				<i class="icon-status"></i>
				<div class="statusinfo">
					<h3 class="statustitle" v-text='statusTitle'></h3>
					<p class="statuscontent" v-if="isdisplay">There are also products that have not been evaluated</p>
					<p class="statuscontent" v-if="!isdisplay">you can back to <a>order list</a></p>
					<p class="statuscontent" v-if="isdisplay">you can back to <a>order list</a> or <a>continue review</a></p>		
				</div>
			</div>	
		</div>	
	</div>    
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			statusTitle:'Review success',
			isdisplay:true
		}
	}
}	
</script>
<style lang="stylus">


</style>
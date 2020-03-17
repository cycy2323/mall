<template>
	<view class="">
		<!-- toptitle -->
		<view class="header">
			<view class="target" @tap="handleTarget(i)" v-for="(target,i) in filterByList" :key="target.goods_id" :class="{'on':target.selected}">
				{{target.text}}
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view @tap="handleGoods(item)" class="product" v-for="(item,index) in goodsList" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<view class="name">{{item.name}}</view>
					<view class="info">
						<view class="price">￥{{item.price}}</view>
						<view class="slogan">{{item.slogan}} <text>人付款</text></view>
					</view>
				</view>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../utils/interfaces.js'
	export default {
		data() {
			return {
				goodsList: [], // 商品列表大数组
				filterby: "all", // 默认选择的tab
				page: 1,
				size: 6,
				loadingText: "正在加载....",
				filterByList: [{
						text: '全部',
						selected: true,
						filterby: 'all'
					},
					{
						text: '口碑',
						selected: false,
						filterby: 'public'
					},
					{
						text: '热门',
						selected: false,
						filterby: 'hot'
					}
				]
			}
		},
		onLoad(option) {
			// console.log(option)
			uni.setNavigationBarTitle({
				title: option.name
			})
			this.loadData()
		},
		//下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				this.page = 1
				this.loadingText = '加载中...'
				this.goodsList = []
				this.loadData()
				uni.stopPullDownRefresh()
			}, 1000)
		},
		//上拉加载
		onReachBottom() {
			this.page++
			this.loadData()
		},
		methods: {
			handleGoods(item) {
				// 页面跳转 商品详情
				uni.navigateTo({
					url: './goods?goodsInfo=' + JSON.stringify(item)
				})
			},
			handleTarget(index) {
				this.filterByList[index].selected = true
				for (let k in this.filterByList) {
					if (k != index) this.filterByList[k].selected = false
				}
				//切换加载数据
				this.filterby = this.filterByList[index].filterby
				this.page = 1
				this.loadingText = '加载中...'
				this.goodsList = []
				this.loadData()
			},
			loadData() {
				this.request({
					url: `${interfaces.getGoodsList}/${this.filterby}/${this.page}/${this.size}`,
					// loading: this.loadingText,
					success: (res => {
						// console.log(res)
						// this.goodsList = res.data
						if (res.data.length > 0) {
							res.data.forEach(item => this.goodsList.push(item))
						} else {
							this.loadingText = '~我是有底线的~'
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}

			.icon {
				font-size: 26upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}

	.goods-list {
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			column-count: 2;
			column-gap: 1em;

			.product {
				break-inside: avoid;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);

				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 6upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>

type OriginEntrust = {
  originColor: string[];
  defaultStr?: string;
};

class CreateEntrustDom {
  private root: HTMLDivElement | null;
  private originColor: string[];
  private defaultStr: string | undefined;

  constructor({ originColor, defaultStr }: OriginEntrust) {
    this.originColor = originColor;
    this.defaultStr = defaultStr;
    this.root = document.querySelector("#app");
    this.crateElementAndInsert();
    this.bindEvent();
  }

  private crateElementAndInsert() {
    const str = `
      <ul class="nav">
        ${this.parser(
          this.originColor.map((item) => {
            return `<li class="li-item" style="background-color:${item}">${item}</li>`;
          })
        )}
      </ul>
      <div class="container">当前颜色是：<span class="value">${
        this.defaultStr ?? "Green"
      }</span></div>
    `;

    this.root!.innerHTML = str;
  }
  private bindEvent() {
    let nav = document.querySelector(".nav");
    nav?.addEventListener("click", this.click);
  }
  private click(e: Event) {
    const target = e.target as HTMLLIElement;
    if (target.nodeName.toLocaleLowerCase() === "li") {
      const context = target.innerText;
      const value = document.querySelector(".value");
      value!.textContent = context;
    }
  }
  private parser(arr: string[]): string {
    let str = "";
    for (const item of arr) {
      str += item;
    }
    return str;
  }
}

new CreateEntrustDom({
  originColor: ["Red", "Green", "Yellow", "Blue", "Gray"],
  defaultStr: "Red",
});
